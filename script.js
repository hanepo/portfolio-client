// script.js (Updated)

document.addEventListener("DOMContentLoaded", function() {
    // Data for sections
    const skillsData = [
        { title: "Web Development", skills: ["HTML5", "CSS3", "JavaScript", "React", "Laravel", "Node.js"], icon: "fa-globe" },
        { title: "Mobile Development", skills: ["React Native", "APIs", "Firebase", "Mobile UI/UX"], icon: "fa-mobile-alt" },
        { title: "Database & Backend", skills: ["MySQL", "Firebase", "SQL", "REST APIs", "Laravel"], icon: "fa-database" },
        { title: "Design & Tools", skills: ["Figma", "UI/UX Design", "Responsive Design", "Prototyping"], icon: "fa-palette" },
        { title: "Development Tools", skills: ["Git", "GitHub", "VS Code", "NPM", "Composer"], icon: "fa-code-branch" },
        { title: "Programming", skills: ["JavaScript", "PHP", "TypeScript", "JSON", "XML"], icon: "fa-code" }
    ];

    const projectsData = [
        { 
            title: "Restaurant Online Ordering System", 
            description: "A complete online food ordering system with menu browsing, cart, and payment features.", 
            techStack: ["React", "Laravel", "MySQL"], 
            image: "assets/restaurantbooking.PNG",
            liveDemo: "https://hanepo.github.io/client-restaurant-demo/",
            github: "https://github.com/hanepo/client-restaurant-demo.git"
        },
        { 
            title: "Aina Abdul Fans Club Registration System", 
            description: "A fan club registration website for Aina Abdul fans, allowing users to sign up and manage memberships.", 
            techStack: ["React", "Firebase"], 
            image: "assets/ainaabdul.PNG",
            liveDemo: "https://hanepo.github.io/ainaabdul-demo/",
            github: "https://github.com/hanepo/ainaabdul-demo"
        },
        { 
            title: "MediCompanion AI", 
            description: "A healthcare mobile app for elderly users with medication reminders, caregiver alerts, and AI-powered assistance.", 
            techStack: ["React Native", "Firebase", "AI APIs"], 
            image: "assets/medicompanionai.jpg",
            liveDemo: "https://github.com/naimhakimi-sketch/MediCompanion-AI",
            github: "https://github.com/naimhakimi-sketch/MediCompanion-AI"
        },
        {
        title: "Retail Stock Manager",
        description: "Developed a web-based stock management system for retail shops to replace manual bookkeeping. The platform allows shop owners to easily add, update, and monitor inventory, with low-stock alerts and report generation for smarter decision making.",
        techStack: ["React", "Tailwind CSS", "Firebase Auth", "Firestore"],
        image: "assets/retails.PNG", // Update path if needed
        liveDemo: "https://amazing-truffle-5ba84d.netlify.app/", // Replace with your actual demo link
        github: "https://github.com/hanepo/retails-store"
        },
        { 
            title: "Barber Haircut Booking System", 
            description: "A booking platform for barbershops where customers can schedule haircuts and manage appointments.", 
            techStack: ["React", "Node.js", "MongoDB"], 
            image: "assets/haricut.PNG",
            liveDemo: "https://hanepo.github.io/client-barber-demo/",
            github: "https://github.com/hanepo/client-barber-demo.git"
        },
        { 
            title: "Portfolio Builder for Clients", 
            description: "A customizable portfolio website solution designed to help clients showcase their work professionally.", 
            techStack: ["React", "Tailwind CSS", "Firebase"], 
            image: "assets/biodataemily.PNG",
            liveDemo: "https://hanepo.github.io/client-website-demo/",
            github: "https://github.com/hanepo/client-website-demo"
        }
    ];
    
    const testimonialsData = [
        { name: "Aniq", role: "FYP student", content: "Hanep create a website for online ordering system so the waiter doesnt need to take the order from the customer", avatar: "LA" },
        { name: "Amirul Ash", role: "Barber", content: "He help me create a website for booking online so people dont have to queue to get a hair cut", avatar: "AA" },
        { name: "Emily Rodriguez", role: "Freelance", content: "Hanep transformed our outdated website into a modern, responsive platform.", avatar: "ER" }
    ];

    const contactMethodsData = [
        { icon: 'fa-envelope', title: 'Email', value: 'mhnisf@gmail.com', link: 'mailto:mhnisf@gmail.com', description: 'Send me an email anytime' },
        { icon: 'fa-brands fa-whatsapp', title: 'WhatsApp', value: '0177692748', link: 'https://wa.me/60177692748', description: 'Quick chat on WhatsApp' },
        { icon: 'fa-up-right-from-square', title: 'Fiverr', value: 'fiverr.com/haneprubaie', link: 'https://www.fiverr.com/haneprubaie?public_mode=true', description: 'Hire me on Fiverr' }
    ];

    // --- RENDER FUNCTIONS (Unchanged) ---
    function renderSkills() {
        const container = document.getElementById('skills-grid');
        if (!container) return;
        container.innerHTML = skillsData.map(category => `
            <div class="card">
                <div style="display: flex; align-items: center; gap: 0.75rem; margin-bottom: 1rem;">
                    <i class="fas ${category.icon}" style="font-size: 1.5rem; color: var(--primary);"></i>
                    <h3>${category.title}</h3>
                </div>
                <div style="display: flex; flex-wrap: wrap; gap: 0.5rem;">
                    ${category.skills.map(skill => `<span class="skill-tag">${skill}</span>`).join('')}
                </div>
            </div>
        `).join('');
    }

    function renderProjects() {
        const container = document.getElementById('projects-grid');
        if (!container) return;
        container.innerHTML = projectsData.map((project, index) => `
            <div class="card project-card" data-index="${index}">
                <img src="${project.image}" alt="${project.title}" style="width: 100%; height: 12rem; object-fit: cover; border-radius: 0.5rem; margin-bottom: 1rem;">
                <h3>${project.title}</h3>
                <p style="color: var(--muted-foreground); margin: 0.5rem 0 1rem 0;">${project.description}</p>
                <div style="display: flex; flex-wrap: wrap; gap: 0.5rem;">
                     ${project.techStack.map(tech => `<span class="skill-tag">${tech}</span>`).join('')}
                </div>
            </div>
        `).join('');
    }
    
    function renderTestimonials() {
        const container = document.getElementById('testimonials-grid');
        if (!container) return;
        container.innerHTML = testimonialsData.map(t => `
            <div class="card">
                <p style="font-style: italic; margin-bottom: 1rem;">"${t.content}"</p>
                <div style="display: flex; align-items: center; gap: 0.75rem; border-top: 1px solid var(--border); padding-top: 1rem;">
                    <div class="testimonial-avatar">${t.avatar}</div>
                    <div>
                        <p style="font-weight: 600; margin: 0;">${t.name}</p>
                        <p style="font-size: 0.875rem; color: var(--muted-foreground); margin: 0;">${t.role}</p>
                    </div>
                </div>
            </div>
        `).join('');
    }
    
    function renderContactMethods() {
        const container = document.getElementById('contact-methods');
        if (!container) return;
        container.innerHTML = `
            <div class="card">
                <h3>Get In Touch</h3>
                ${contactMethodsData.map(method => `
                    <a href="${method.link}" target="_blank" style="display: flex; align-items: center; gap: 1rem; padding: 1rem; border-radius: 0.5rem; text-decoration: none; color: inherit; transition: var(--transition-smooth); margin-top: 1rem; background-color: var(--muted);">
                        <i class="fas ${method.icon}" style="font-size: 1.25rem; color: var(--primary);"></i>
                        <div>
                            <div style="font-weight: 500;">${method.title}</div>
                            <div style="font-size: 0.875rem; color: var(--muted-foreground);">${method.value}</div>
                        </div>
                    </a>
                `).join('')}
            </div>
        `;
    }

    function renderFooter() {
        const container = document.getElementById("footer-content");
        if (!container) return;
        container.innerHTML = `
            <div class="footer-content">
                <div>
                    <a href="#home" class="footer-brand">Hanep</a>
                    <p style="color: rgba(226, 232, 240, 0.8); margin-top: 1rem;">Web & App Developer passionate about creating beautiful, functional digital experiences.</p>
                </div>
                <div>
                    <h3 style="font-size: 1.125rem; font-weight: 600;">Quick Links</h3>
                    <div style="display: flex; flex-direction: column; gap: 0.5rem; margin-top: 1rem;">
                        <a href="#about" style="color: rgba(226, 232, 240, 0.8); text-decoration: none;">About</a>
                        <a href="#projects" style="color: rgba(226, 232, 240, 0.8); text-decoration: none;">Projects</a>
                        <a href="#contact" style="color: rgba(226, 232, 240, 0.8); text-decoration: none;">Contact</a>
                    </div>
                </div>
                 <div>
                    <h3 style="font-size: 1.125rem; font-weight: 600;">Get In Touch</h3>
                    <div style="margin-top: 1rem; color: rgba(226, 232, 240, 0.8);">
                        <p>mhnisf@gmail.com</p>
                        <p>Available for remote work</p>
                    </div>
                </div>
            </div>
            <div class="footer-bottom">
                <p>© ${new Date().getFullYear()} Hanep. All rights reserved.</p>
            </div>
        `;
    }

    // --- INTERACTIVITY (Unchanged) ---
    const mobileMenuButton = document.querySelector('.mobile-menu-button');
    const navLinksContainer = document.querySelector('.nav-links');
    if (mobileMenuButton && navLinksContainer) {
        mobileMenuButton.addEventListener('click', () => {
            navLinksContainer.classList.toggle('open');
            const icon = mobileMenuButton.querySelector('i');
            icon.classList.toggle('fa-bars');
            icon.classList.toggle('fa-times');
        });
    }

    const navLinks = document.querySelectorAll('.nav-links a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (navLinksContainer.classList.contains('open')) {
                navLinksContainer.classList.remove('open');
                const icon = mobileMenuButton.querySelector('i');
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
    });

    const sections = document.querySelectorAll('main section');
    const nav = document.querySelector('.navigation');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) { nav.classList.add('navigation-scrolled'); } 
        else { nav.classList.remove('navigation-scrolled'); }

        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            if (pageYOffset >= sectionTop - 150) { current = section.getAttribute('id'); }
        });
        navLinks.forEach(a => {
            a.classList.remove('active');
            if (a.getAttribute('href').substring(1) === current) { a.classList.add('active'); }
        });
    });

    const modal = document.getElementById('project-modal');
    const modalBody = document.getElementById('modal-body');
    const closeButton = document.querySelector('.close-button');

    function openModal(projectIndex) {
        const project = projectsData[projectIndex];
        modalBody.innerHTML = `
            <img src="${project.image}" alt="${project.title}" style="width: 100%; border-radius: 0.5rem; margin-bottom: 1.5rem;">
            <h2>${project.title}</h2>
            <p>${project.description}</p>
            <div style="display: flex; flex-wrap: wrap; gap: 0.5rem; margin: 1rem 0;">
                ${project.techStack.map(tech => `<span class="skill-tag">${tech}</span>`).join('')}
            </div>
            <div>
                <a href="${project.liveDemo}" class="btn btn-primary" target="_blank">Live Demo</a>
                <a href="${project.github}" class="btn btn-outline" target="_blank">View Code</a>
            </div>
        `;
        modal.style.display = 'block';
    }

    function closeModal() { modal.style.display = 'none'; }
    closeButton.addEventListener('click', closeModal);
    window.addEventListener('click', (event) => { if (event.target == modal) { closeModal(); } });

    function addProjectClickListeners() {
        document.querySelectorAll('.project-card').forEach(card => {
            card.addEventListener('click', () => {
                openModal(card.getAttribute('data-index'));
            });
        });
    }

    // --- NEW CONTACT FORM LOGIC ---
    // Initialize EmailJS with your Public Key
    (function(){
        emailjs.init('dPeG9iFym_2y2EQsZ'); // Your Public Key
    })();

    const contactForm = document.getElementById('contact-form');
    if(contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();

            const submitButton = this.querySelector('.form-submit-btn');
            const originalButtonText = submitButton.innerHTML;
            submitButton.disabled = true;
            submitButton.innerHTML = 'Sending...';

            const serviceID = 'service_74qdjmi'; // Your Service ID
            const templateID = 'template_f3nx5wc'; // Your Template ID

            // Send the form data to EmailJS
            emailjs.sendForm(serviceID, templateID, this)
                .then(() => {
                    submitButton.innerHTML = 'Message Sent!';
                    alert('Thank you for your message. I\'ll get back to you soon!');
                    this.reset();
                    // Optional: Reset button text after a few seconds
                    setTimeout(() => {
                        submitButton.disabled = false;
                        submitButton.innerHTML = originalButtonText;
                    }, 3000);
                }, (err) => {
                    submitButton.disabled = false;
                    submitButton.innerHTML = originalButtonText;
                    alert('Failed to send message. Error: ' + JSON.stringify(err));
                });
        });
    }

    // --- INITIALIZE ALL SECTIONS ---
    renderSkills();
    renderProjects();
    renderTestimonials();
    renderContactMethods();
    renderFooter();
    addProjectClickListeners();
});