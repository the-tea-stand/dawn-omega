(function () {
    'use strict';

    var memberData = null;

    // --- Helpers ---

    function showEl(id) {
        var el = document.getElementById(id);
        if (el) el.style.display = '';
    }

    function hideEl(id) {
        var el = document.getElementById(id);
        if (el) el.style.display = 'none';
    }

    function setMsg(id, text, isError) {
        var el = document.getElementById(id);
        if (!el) return;
        el.textContent = text;
        el.style.display = text ? '' : 'none';
        el.className = isError ? 'error-message' : 'success-message';
    }

    // --- Fetch member data ---

    function fetchMember() {
        return fetch('/members/api/me', { credentials: 'include' })
            .then(function (res) {
                if (!res.ok) throw new Error('Not authenticated');
                return res.json();
            });
    }

    // --- Populate profile form ---

    function populateProfile(member) {
        var nameInput = document.getElementById('account-name');
        var emailInput = document.getElementById('account-email');
        if (nameInput) nameInput.value = member.name || '';
        if (emailInput) emailInput.value = member.email || '';
    }

    // --- Populate membership section ---

    function populateMembership(member) {
        // Show current plan name
        var planNameEl = document.querySelector('.current-plan-name');
        if (planNameEl) {
            var tierSpans = document.querySelectorAll('.member-tier-name');
            if (tierSpans.length > 0) {
                planNameEl.textContent = tierSpans[0].textContent;
            }
        }
    }

    // --- Render newsletter toggles ---

    function renderNewsletters(member) {
        var container = document.getElementById('newsletter-list');
        if (!container) return;
        container.innerHTML = '';

        var newsletters = member.newsletters || [];
        var subscribed = member.newsletters ? member.newsletters.map(function (n) { return n.id; }) : [];

        // Ghost's /members/api/me returns subscribed newsletters only.
        // We need all available newsletters — fetch from the public API.
        fetch('/ghost/api/content/newsletters/?key=' + getContentApiKey(), {
            credentials: 'include'
        }).then(function (res) {
            if (!res.ok) throw new Error('Failed to load newsletters');
            return res.json();
        }).then(function (data) {
            var all = (data.newsletters || []).filter(function (n) { return n.status === 'active'; });
            if (all.length === 0) {
                container.innerHTML = '<p>No newsletters available.</p>';
                return;
            }
            all.forEach(function (nl) {
                var isChecked = subscribed.indexOf(nl.id) !== -1;
                var item = document.createElement('div');
                item.className = 'newsletter-item';

                var label = document.createElement('label');
                label.className = 'toggle-switch';
                label.setAttribute('for', 'nl-' + nl.id);

                var checkbox = document.createElement('input');
                checkbox.type = 'checkbox';
                checkbox.id = 'nl-' + nl.id;
                checkbox.dataset.nlId = nl.id;
                checkbox.checked = isChecked;

                var slider = document.createElement('span');
                slider.className = 'toggle-slider';

                label.appendChild(checkbox);
                label.appendChild(slider);

                var nameSpan = document.createElement('span');
                nameSpan.className = 'newsletter-name';
                nameSpan.textContent = nl.name;

                item.appendChild(nameSpan);
                item.appendChild(label);
                container.appendChild(item);
            });
        }).catch(function (err) {
            container.innerHTML = '<p>Could not load newsletters.</p>';
            console.error(err);
        });
    }

    // Ghost content API key is embedded in the page by Ghost portal script;
    // we read it from the ghost script tag data attribute.
    function getContentApiKey() {
        var el = document.querySelector('[data-ghost-root]');
        if (el) return el.dataset.key || '';
        // fallback: try to extract from ghost_head script
        var scripts = document.querySelectorAll('script[src]');
        for (var i = 0; i < scripts.length; i++) {
            var m = scripts[i].src.match(/[?&]key=([^&]+)/);
            if (m) return m[1];
        }
        return '';
    }

    // --- Save profile ---

    function bindSaveProfile() {
        var btn = document.getElementById('save-profile');
        if (!btn) return;
        btn.addEventListener('click', function () {
            var name = (document.getElementById('account-name') || {}).value || '';
            var email = (document.getElementById('account-email') || {}).value || '';
            setMsg('profile-success', '', false);
            setMsg('profile-error', '', false);

            fetch('/members/api/me', {
                method: 'PUT',
                credentials: 'include',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ name: name, email: email })
            }).then(function (res) {
                if (!res.ok) return res.json().then(function (d) { throw new Error((d.errors && d.errors[0] && d.errors[0].message) || 'Update failed'); });
                return res.json();
            }).then(function () {
                setMsg('profile-success', 'Profile updated!', false);
            }).catch(function (err) {
                setMsg('profile-error', err.message || 'Could not save profile.', true);
            });
        });
    }

    // --- Save newsletters ---

    function bindSaveNewsletters() {
        var btn = document.getElementById('save-newsletters');
        if (!btn) return;
        btn.addEventListener('click', function () {
            setMsg('newsletter-success', '', false);
            setMsg('newsletter-error', '', false);

            var checked = document.querySelectorAll('#newsletter-list input[type="checkbox"]:checked');
            var newsletters = Array.prototype.map.call(checked, function (cb) {
                return { id: cb.dataset.nlId };
            });

            fetch('/members/api/me', {
                method: 'PUT',
                credentials: 'include',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ newsletters: newsletters })
            }).then(function (res) {
                if (!res.ok) return res.json().then(function (d) { throw new Error((d.errors && d.errors[0] && d.errors[0].message) || 'Update failed'); });
                return res.json();
            }).then(function () {
                setMsg('newsletter-success', 'Preferences saved!', false);
            }).catch(function (err) {
                setMsg('newsletter-error', err.message || 'Could not save preferences.', true);
            });
        });
    }

    // --- Stripe checkout ---

    function getStripeLink(amount, payWhatYouWish) {
        var email = memberData && memberData.email;
        if (!email) return;

        if (payWhatYouWish) {
            var pwywForm = document.getElementById('pwyw-form');
            if (pwywForm && !pwywForm.reportValidity()) return;
            amount = amount || (document.getElementById('subscriptionAmount') || {}).value;
        }

        fetch('https://teastand-backend.vercel.app/api/get-stripe-session', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': '*/*'
            },
            body: JSON.stringify({ email: email, amount: amount })
        }).then(function (res) {
            return res.json();
        }).then(function (json) {
            document.location = json.url;
        });
    }

    // --- Billing portal ---

    function bindManageBilling() {
        var btn = document.getElementById('manage-billing');
        if (!btn) return;
        btn.addEventListener('click', function () {
            var email = memberData && memberData.email;
            if (!email) return;
            fetch('https://teastand-backend.vercel.app/api/create-billing-portal-session', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': '*/*'
                },
                body: JSON.stringify({ email: email })
            }).then(function (res) {
                return res.json();
            }).then(function (json) {
                document.location = json.url;
            });
        });
    }

    // --- Tier click handlers ---

    function bindTierButtons() {
        var sippers = document.getElementById('Sipper-payment-button');
        var steeper = document.getElementById('Steeper-payment-button');
        var bigSteeper = document.getElementById('Big Steeper-payment-button');
        var pwyw = document.getElementById('pwyw-payment-button');

        if (sippers) sippers.addEventListener('click', function () { getStripeLink(3, false); });
        if (steeper) steeper.addEventListener('click', function () { getStripeLink(9, false); });
        if (bigSteeper) bigSteeper.addEventListener('click', function () { getStripeLink(99, false); });
        if (pwyw) pwyw.addEventListener('click', function () { getStripeLink(null, true); });
    }

    // --- Init ---

    document.addEventListener('DOMContentLoaded', function () {
        // If the logged-in section isn't rendered, nothing to do.
        if (!document.getElementById('account-name')) return;

        fetchMember().then(function (member) {
            memberData = member;
            populateProfile(member);
            populateMembership(member);
            renderNewsletters(member);
        }).catch(function (err) {
            console.error('Could not load member data:', err);
        });

        bindSaveProfile();
        bindSaveNewsletters();
        bindManageBilling();
        bindTierButtons();
    });

}());
