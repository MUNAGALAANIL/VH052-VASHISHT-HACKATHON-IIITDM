<script>
        function toggleNav() {
            const nav = document.querySelector('nav');
            nav.classList.toggle('open');
        }

        // Add event listeners to the menu icon
        const menuIcon = document.querySelector('.menu-icon');
        menuIcon.addEventListener('click', toggleNav);

        // Add event listeners to the sign-up buttons
        const signUpFarmerBtn = document.querySelector('a[href="#signup-farmer"]');
        const signUpMarketBtn = document.querySelector('a[href="#signup-market"]');

        signUpFarmerBtn.addEventListener('click', (e) => {
            e.preventDefault();

            toggleForms('farmer');
        });

        signUpMarketBtn.addEventListener('click', (e) => {
            e.preventDefault();
            toggleForms('market');
        });

        function toggleForms(formType) {
            const farmerForm = document.getElementById('signup-farmer');
            const marketForm = document.getElementById('signup-market');
            const sections = document.querySelectorAll('section:not(#signup-farmer):not(#signup-market)');

            // Hide all sections except sign-up forms
            sections.forEach(section => {
                section.style.display = 'none';
            });

            // Display the appropriate sign-up form
            if (formType === 'farmer') {
                farmerForm.style.display = 'block';
            } else if (formType === 'market') {
                marketForm.style.display = 'block';
            }
        }


        // Scroll to the section when clicking on the menu options
        const menuLinks = document.querySelectorAll('.slide-menu a');

        menuLinks.forEach((link) => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const targetId = link.getAttribute('href');
                const targetElement = document.querySelector(targetId);
                targetElement.scrollIntoView({ behavior: 'smooth' });
            });
        });
    </script>
    <script>
        document.querySelector("#ok").addEventListener("click", (e) => {
            document.querySelector(".hea").style.display = "none";
        });
        document.querySelector(".menu-icon").addEventListener("click", (e) => {
            document.querySelector(".hea").style.display = "block";
        });
    </script>