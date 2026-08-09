/* ==========================================================================
   CONTENT.JS : toutes les données textuelles du portfolio (FR et EN).
   Modifie ce fichier pour changer les textes. Les images sont gérées
   séparément dans data/images.json (voir README.md).
   ========================================================================== */

const CONTENT = {
  fr: {
    meta: {
      title: "Régis KESSÉ | Ingénieur Informatique · IA, LLM & RAG · Vision par Ordinateur",
      description:
        "Portfolio de Régis KESSÉ, ingénieur informatique (ESIR + ESI INP-HB) spécialisé en IA appliquée (LLM, RAG), vision par ordinateur et développement full-stack.",
    },

    nav: {
      brand: "RK",
      links: [
        { key: "home", label: "Accueil" },
        { key: "about", label: "À propos" },
        { key: "skills", label: "Compétences" },
        { key: "experience", label: "Parcours" },
        { key: "projects", label: "Projets" },
        { key: "education", label: "Formation" },
        { key: "contact", label: "Contact" },
      ],
      cv: "CV",
    },

    hero: {
      hello: "Bonjour, je suis",
      name: "Régis KESSÉ",
      roles: [
        "Ingénieur Informatique",
        "Développeur IA & LLM",
        "Ingénieur Vision par Ordinateur",
        "Développeur Full-Stack",
        "Bâtisseur de systèmes RAG",
      ],
      tagline:
        "Ingénieur Bac+5 (ESIR + ESI INP-HB) qui aime construire des systèmes qui tournent vraiment : du modèle de deep learning à l'API qui le sert, de la donnée brute au tableau de bord, du prototype au déploiement en production.",
      badges: ["Rennes, France", "Disponible dès octobre 2026", "Alternance 12 mois", "Ouvert au remote"],
      ctaPrimary: "Voir mes projets",
      ctaSecondary: "Télécharger mon CV",
      scrollHint: "Défiler",
      statsInline: [
        { value: 30, suffix: "+", label: "projets & TPs" },
        { value: 3, suffix: "", label: "écoles d'ingénieur" },
        { value: 15, suffix: "+", label: "technologies maîtrisées" },
        { value: 5, suffix: "+", label: "années d'expérience IT" },
      ],
    },

    about: {
      kicker: "À propos",
      title: "Construire des choses qui marchent, pas des démos",
      paragraphs: [
        "Je m'appelle Régis KESSÉ, ingénieur informatique en 3<sup>e</sup> année à l'ESIR (École Supérieure d'Ingénieurs de Rennes), option Imagerie Numérique, en double diplôme avec l'ESI de l'INP-HB (Côte d'Ivoire) où j'ai déjà validé un DTS en Électronique, Informatique & Télécoms.",
        "Avant l'ESIR, j'ai passé plusieurs années sur le terrain : administration systèmes et réseaux, développement full-stack (PHP/Laravel, Django, Flutter), enseignement vacataire sur les technologies PC SOFT, et gestion de ma propre petite structure, <strong>EPSIE</strong>, à travers laquelle j'ai livré une dizaine de produits en production : applications mobiles sur store, ERP, plateformes web.",
        "Aujourd'hui je me spécialise en IA appliquée (deep learning, vision par ordinateur, intégration de LLM et systèmes RAG), sans perdre de vue ce que ces années de développement m'ont appris : un modèle qui ne répond pas à une requête HTTP en temps réel n'est qu'un notebook. Je cherche à faire les deux : la recherche et le produit.",
      ],
      quote: "Le PoC académique et le livrable fonctionnel ne sont pas dans le même registre.",
      factsTitle: "En bref",
      facts: [
        { icon: "fa-graduation-cap", label: "Formation", value: "Ingénieur ESIR + ESI INP-HB (Bac+5)" },
        { icon: "fa-location-dot", label: "Localisation", value: "Rennes, France · mobile" },
        { icon: "fa-language", label: "Langues", value: "Français (natif) · Anglais (B2)" },
        { icon: "fa-briefcase", label: "Disponibilité", value: "Alternance 12 mois dès octobre 2026 · remote possible" },
        { icon: "fa-rocket", label: "Side-project", value: "Fondateur d'EPSIE (studio dev indépendant)" },
        { icon: "fa-certificate", label: "Certifications", value: "MOS Excel · MTA Windows OS" },
      ],
    },

    skills: {
      kicker: "Compétences",
      title: "Une boîte à outils large, du modèle à la prod",
      subtitle:
        "IA appliquée et vision par ordinateur en spécialité, mais avec un vrai socle de développement full-stack, bases de données, DevOps et systèmes/réseaux, hérité de plusieurs années de terrain avant l'ingénieur.",
      categories: [
        {
          icon: "fa-code",
          name: "Langages",
          items: ["Python", "C / C++", "Java", "JavaScript", "PHP", "Dart (Flutter)", "SQL", "MATLAB", "R", "WLangage"],
        },
        {
          icon: "fa-brain",
          name: "LLM & IA générative",
          items: ["Ollama · LLaMA 3 (local)", "Gemini API", "LlamaIndex (RAG)", "Sentence-Transformers", "pgvector · ChromaDB", "Prompt engineering", "n8n (workflows IA)"],
        },
        {
          icon: "fa-diagram-project",
          name: "Machine Learning & Deep Learning",
          items: ["Keras / TensorFlow", "CNN · Transfer Learning", "U-Net (segmentation)", "scikit-learn (SVM, RF, AdaBoost)", "NLP (NLTK, TF-IDF)", "IA symbolique"],
        },
        {
          icon: "fa-eye",
          name: "Vision par ordinateur",
          items: ["OpenCV", "ViSP", "Segmentation (k-means)", "Géométrie épipolaire", "Photogrammétrie / SfM", "FFT / DCT", "YOLOv8"],
        },
        {
          icon: "fa-cube",
          name: "Graphisme & 3D",
          items: ["OpenGL / GLSL / GLM", "Unity / C#", "Qt / C++", "Animation & cinématique inverse"],
        },
        {
          icon: "fa-server",
          name: "Web & Backend",
          items: ["Django REST Framework", "Node.js / Express", "Laravel · Livewire", "Flask", "React", "Flutter / Firebase", "Bootstrap"],
        },
        {
          icon: "fa-database",
          name: "Bases de données",
          items: ["PostgreSQL (+ pgvector)", "MySQL", "Oracle", "SQL Server", "HFSQL", "Firestore / NoSQL"],
        },
        {
          icon: "fa-boxes-stacked",
          name: "DevOps & Cloud",
          items: ["Docker", "GitLab CI/CD", "Jenkins", "GitHub Actions", "SonarQube · JUnit", "Linux / Windows Server", "Google Cloud"],
        },
        {
          icon: "fa-network-wired",
          name: "Réseaux & Sécurité",
          items: ["BGP / VPLS / MPLS", "PPP (PAP/CHAP)", "Pare-feu SOPHOS", "Kaspersky Endpoint", "Active Directory (AD DS)"],
        },
        {
          icon: "fa-microchip",
          name: "Embarqué & IoT",
          items: ["Arduino", "ESP32", "RFID", "LoRa", "Capteurs & actionneurs", "VHDL / FPGA"],
        },
        {
          icon: "fa-diagram-successor",
          name: "Outils & méthodes",
          items: ["Git", "Agile / Scrum", "Jira", "Grafana · Prometheus · Loki", "AutoCAD · QGis"],
        },
      ],
    },

    experience: {
      kicker: "Parcours",
      title: "Expérience professionnelle",
      subtitle: "Du terrain (admin systèmes, dev, enseignement) à la R&D en école d'ingénieur.",
      items: [
        {
          period: "07/2026-09/2026 (en cours)",
          title: "Stagiaire R&D, Modélisation Dataflow & HPC (projet SKAO)",
          company: "IETR, INSA Rennes (équipe VAADER)",
          location: "Rennes, France",
          icon: "fa-flask",
          points: [
            "Modélisation Dataflow (outil PREESM) d'un algorithme de déconvolution en radioastronomie",
            "Étude de la distribution et de la parallélisation d'un pipeline de traitement de données HPC",
            "Implémentation Python/C, expérimentations reproductibles, documentation technique",
          ],
        },
        {
          period: "03/2020-présent",
          title: "Fondateur & Développeur Full-Stack",
          company: "EPSIE (studio de développement indépendant)",
          location: "Rennes / Abidjan (remote)",
          icon: "fa-rocket",
          points: [
            "Conception et mise en production d'une dizaine de produits : ERP, apps mobiles (store), plateformes web",
            "Chef de projet sur des plateformes tierces : livraison de repas (GoutaGo), VTC (STAN), gestion d'escales portuaires",
            "Administration VPS Linux, pipelines CI/CD GitLab, containerisation Docker",
          ],
        },
        {
          period: "09/2020-05/2023",
          title: "Développeur & Technicien Informatique",
          company: "OCSI-CI SARL",
          location: "Abidjan, Côte d'Ivoire",
          icon: "fa-laptop-code",
          points: [
            "Développement d'applications Python/Django et PHP/Laravel, structuration de données",
            "Développement desktop full-stack sur WinDev, graphisme (Photoshop, AutoCAD)",
            "Support technique aux utilisateurs et maintenance des systèmes en production",
          ],
        },
        {
          period: "09/2020-08/2023",
          title: "Enseignant vacataire, Technologies PC SOFT",
          company: "INP-HB / ESI",
          location: "Yamoussoukro, Côte d'Ivoire",
          icon: "fa-chalkboard-user",
          points: [
            "TPs de développement (WinDev, WebDev, WinDev Mobile)",
            "Rédaction de supports pédagogiques, accompagnement des étudiants",
          ],
        },
        {
          period: "05/2023-08/2023",
          title: "Informaticien Systèmes & Réseaux",
          company: "SIGASECURITE",
          location: "Abidjan, Côte d'Ivoire",
          icon: "fa-shield-halved",
          points: [
            "Administration Windows Server (AD DS), SQL Server, ERP (SAGE i7, Odoo)",
            "Sécurité opérationnelle : pare-feu SOPHOS, antivirus Kaspersky Endpoint, sauvegardes Acronis",
            "Gestion messagerie (IONOS, M365), supervision LAN et téléphonie",
          ],
        },
        {
          period: "08/2018 (1 mois)",
          title: "Maintenancier Informatique, Technicien LAN",
          company: "LOGIMATIQUE",
          location: "Abidjan, Côte d'Ivoire",
          icon: "fa-tools",
          points: [
            "Première expérience professionnelle : découverte du monde de l'entreprise",
            "Étude d'un logiciel de gestion commerciale (point de vente pharmacie) et d'un serveur Windows Server",
          ],
        },
      ],
    },

    education: {
      kicker: "Formation",
      title: "Parcours académique",
      items: [
        {
          period: "09/2025-2027 (3e année en cours)",
          degree: "Ingénierie en Informatique, option Imagerie Numérique",
          school: "ESIR, École Supérieure d'Ingénieurs de Rennes, Université de Rennes",
          details: "Double diplôme ESIR/ESI · Vision par ordinateur · Deep Learning · IA générative · Reconstruction 3D · Architecture logicielle",
          logo: "logo_esir",
        },
        {
          period: "09/2023-2026",
          degree: "Ingénierie EIT (Électronique, Informatique & Télécoms)",
          school: "ESI, INP-HB, Yamoussoukro, Côte d'Ivoire",
          details: "Traitement du signal · IA symbolique · Bases de données · Systèmes d'information · Réseaux",
          logo: "logo_esi_inphb",
        },
        {
          period: "09/2017-08/2020",
          degree: "DTS Électronique, Informatique & Télécoms",
          school: "ESI, INP-HB, Yamoussoukro, Côte d'Ivoire",
          details: "Bases de l'électronique, des télécoms et de l'informatique industrielle",
          logo: "logo_esi_inphb",
        },
      ],
      certifications: {
        title: "Certifications",
        items: [
          { name: "Microsoft Office Specialist", issuer: "Excel" },
          { name: "Microsoft Technology Associate", issuer: "Windows® Operating System Fundamentals" },
        ],
      },
    },

    epsie: {
      kicker: "Side-project",
      title: "EPSIE, mon propre studio de développement",
      description:
        "En 2020, j'ai fondé EPSIE (Entreprise de Prestation de Services Informatiques et Électroniques), une petite équipe d'informaticiens réunie autour de projets concrets : développement web/mobile, maintenance informatique, électronique et IoT. C'est le terrain où j'ai appris à porter un produit de bout en bout, de la conception au support client.",
      membersTitle: "Équipe",
      members: ["Régis KESSÉ", "Franck KOUASSI", "Abel KACOU", "Ivane COULIBALY", "Audrey KOUAME"],
      link: "https://epsie-startup.com",
      linkLabel: "epsie-startup.com",
    },

    projects: {
      kicker: "Projets",
      title: "Projets & réalisations",
      subtitle: "Une sélection de projets académiques et personnels, filtrable par domaine.",
      filters: [
        { key: "all", label: "Tous" },
        { key: "ia", label: "IA & LLM" },
        { key: "vision", label: "Vision par ordinateur" },
        { key: "graphics", label: "Graphisme & 3D" },
        { key: "web", label: "Web & Mobile" },
        { key: "embedded", label: "Embarqué & IoT" },
        { key: "systems", label: "Systèmes & Réseaux" },
        { key: "algo", label: "Algorithmique" },
      ],
      viewMore: "Voir le détail",
      close: "Fermer",
      visit: "Voir en ligne",
      items: [
        {
          id: "rag_assistant",
          category: "ia",
          featured: true,
          title: "Assistant RAG Local : LlamaIndex, PostgreSQL/pgvector & Ollama",
          summary: "Système de question-réponse par Retrieval-Augmented Generation, entièrement local.",
          description:
            "Pipeline complet indexation → retrieval → génération : orchestration avec LlamaIndex, vectorisation des documents via Sentence-Transformers (all-MiniLM-L6-v2), stockage et recherche vectorielle sous PostgreSQL (extension pgvector) et ChromaDB, génération de la réponse par un LLM local (Ollama, llama3:8b). Aucune dépendance à une API externe.",
          tags: ["RAG", "LlamaIndex", "Sentence-Transformers", "PostgreSQL / pgvector", "ChromaDB", "Ollama · LLaMA 3"],
          image: "project_rag_assistant",
        },
        {
          id: "chatbot_llm",
          category: "ia",
          featured: true,
          title: "Spam Detector + Chatbot LLM Local",
          summary: "App Django REST : détection de spam par deep learning, étendue d'un chatbot LLM local.",
          description:
            "Pipeline NLP (TF-IDF, NLTK) et modèle DNN Keras/TensorFlow entraîné sur des emails réels, exposé en temps réel via une API Django REST. Étendue d'un chatbot conversationnel basé sur Ollama/LLaMA 3 tournant en local (inférence sans envoi de données à l'extérieur), intégration API native dans la même application.",
          tags: ["Python", "Django REST", "Keras / TensorFlow", "Ollama · LLaMA 3", "NLP · NLTK", "MySQL"],
          image: "project_chatbot_llm",
        },
        {
          id: "n8n_pipeline",
          category: "ia",
          featured: false,
          title: "Pipeline de Veille Automatisée : n8n & Gemini API",
          summary: "Orchestration complète d'un workflow LLM sur données réelles.",
          description:
            "Workflow n8n : Cron → HTTP (Google News RSS) → filtre → résumé automatique via Gemini API → archivage Google Docs → envoi Gmail. Gestion des erreurs et filtrage sémantique de bout en bout.",
          tags: ["n8n", "Gemini API", "LLM", "Automatisation", "Google Workspace"],
          image: "project_n8n_pipeline",
        },
        {
          id: "deep_learning_tps",
          category: "ia",
          featured: false,
          title: "TPs Deep Learning & Machine Learning (9 TPs)",
          summary: "Du Decision Tree au U-Net : parcours complet de la classification supervisée à la vision.",
          description:
            "9 TPs couvrant l'apprentissage supervisé (Decision Trees, SVM, Random Forests, AdaBoost, Bayésien), les réseaux de neurones sous TensorFlow (GradientTape, autodiff), les CNN (Sequential & Functional API), le Transfer Learning (MobileNetV2, fine-tuning) et la segmentation sémantique (U-Net, dataset CARLA).",
          tags: ["TensorFlow / Keras", "CNN", "Transfer Learning", "U-Net", "scikit-learn"],
          image: "project_deep_learning_tps",
        },
        {
          id: "vision_pipeline",
          category: "vision",
          featured: true,
          title: "Pipeline de Traitement d'Images : Filtrage, Morphologie & Segmentation",
          summary: "De la convolution 2D au seam carving, en C++/ViSP et Python/OpenCV.",
          description:
            "Convolution 2D, filtres de Sobel/Gaussien, morphologie binaire & niveaux de gris, segmentation k-means, squelettisation, seam carving (programmation dynamique / Viterbi). Implémentations en C++ (ViSP) et Python (OpenCV/NumPy).",
          tags: ["C++ / ViSP", "Python / OpenCV", "k-means", "Seam Carving", "Morphologie"],
          image: "project_vision_pipeline",
        },
        {
          id: "epipolar",
          category: "vision",
          featured: false,
          title: "Géométrie Épipolaire : Reconstruction 3D & Stéréovision",
          summary: "Modélisation du système de projection sténopé et calcul des matrices F et E.",
          description:
            "Modèle de projection sténopé, matrices intrinsèques/extrinsèques, contrainte épipolaire, calcul des matrices fondamentale (F) et essentielle (E), droites épipolaires, rectification stéréo. Implémentation Python/NumPy.",
          tags: ["Géométrie épipolaire", "Calibration caméra", "Python / NumPy", "Stéréovision"],
          image: "project_epipolar",
        },
        {
          id: "jpeg_compression",
          category: "vision",
          featured: false,
          title: "Compression d'Images : FFT, DCT & Encodeur JPEG",
          summary: "FFT 2D, encodeur JPEG simplifié et codage entropique de bout en bout.",
          description:
            "FFT 2D (Cooley-Tukey), filtrage fréquentiel passe-bas/passe-haut, encodeur JPEG simplifié (DCT par blocs 8×8, quantification, zig-zag scan), courbes débit/distorsion (PSNR, MSE), codage entropique (Huffman, arithmétique).",
          tags: ["FFT / DCT", "Encodeur JPEG", "PSNR / MSE", "Huffman"],
          image: "project_jpeg_compression",
        },
        {
          id: "drone_mapping",
          category: "vision",
          featured: false,
          title: "Cartographie & Modélisation 3D par Drone",
          summary: "Pilotage drone, reconstruction 3D et cartographies SIG.",
          description:
            "Projet mené avec EVANOV (cabinet conseil QHSE/RSE) : pilotage drone et prise de vue aérienne, reconstruction 3D de sites via photogrammétrie (Agisoft Metashape), production de cartographies SIG (QGis).",
          tags: ["Pilotage drone", "Photogrammétrie / SfM", "Agisoft Metashape", "QGis"],
          image: "project_drone_mapping",
        },
        {
          id: "opengl",
          category: "graphics",
          featured: false,
          title: "Synthèse d'Images : OpenGL",
          summary: "4 TPs progressifs : des shaders de base aux shadow maps et god rays.",
          description:
            "VBO/EBO/VAO, shaders GLSL, transformations modèle/vue/projection ; placage de textures et shading de Phong, normal mapping ; cube maps, skybox, reflection mapping, brouillard, frame buffers, cel shading ; shadow maps, ombres dynamiques et god rays.",
          tags: ["OpenGL", "GLSL", "GLM", "Shaders", "Rendu temps réel"],
          image: "project_opengl",
        },
        {
          id: "animation_3d",
          category: "graphics",
          featured: false,
          title: "Animation 3D & Cinématique Inverse",
          summary: "Graphe de scène, splines d'Hermite, CCD et simulation masses-ressorts.",
          description:
            "Graphe de scène et animation d'un insecte par interpolation de trajectoire (splines d'Hermite) ; cinématique inverse par CCD (Cyclic Coordinate Descent) sur chaînes poly-articulées ; simulation d'un tissu par système masses-ressorts avec contraintes physiques.",
          tags: ["Animation 3D", "Cinématique inverse", "CCD", "Masses-ressorts"],
          image: "project_animation_3d",
        },
        {
          id: "hyperdrift",
          category: "graphics",
          featured: false,
          title: "HYPERDRIFT : Jeu Unity (vol spatial infini)",
          summary: "Infinite runner spatial procédural avec feedback de collision et Game Over animé.",
          description:
            "Jeu de vol en vaisseau spatial à défilement infini dans un couloir futuriste généré procéduralement, vitesse progressive, obstacles statiques et mobiles, système de vie avec feedback (écran tremblant) et désagrégation du vaisseau en Game Over.",
          tags: ["Unity", "C#", "Prefabs", "Particle Effects", "NavMesh"],
          image: "project_hyperdrift",
        },
        {
          id: "bidnaepay",
          category: "web",
          featured: true,
          title: "BIDNAE PAY : Passerelle de Paiement Électronique",
          summary: "Agrégateur de paiement mobile (Orange Money, Wave) pour BIDNAE SARL, en tant que chef de projet & DevSecOps.",
          description:
            "Agrégateur/passerelle de paiement électronique ivoirien développé pour BIDNAE SARL par l'équipe EPSIE, que je pilote en tant que chef de projet et DevSecOps. La première version intègre les opérateurs Orange Money et Wave. Développement en parallèle du site vitrine de BIDNAE SARL (bidnae.goutago.com).",
          tags: ["Laravel", "Livewire", "MySQL", "Ubuntu Server", "Nginx", "Docker", "GitHub Actions", "REST API", "Monitoring"],
          image: "project_bidnaepay",
          link: "https://bidnaepay.goutago.com/",
        },
        {
          id: "goutago",
          category: "web",
          featured: true,
          title: "GoutaGo : Plateforme de Livraison",
          summary: "Chef de projet & développeur : mise en relation clients, livreurs et restaurants.",
          description:
            "Analyse, conception (MERISE/UML) et réalisation d'une plateforme web & mobile de livraison de repas : interface web PHP/MySQL pour livreurs et gestionnaires, app mobile Flutter/Firebase pour les clients (auth, commandes temps réel, géolocalisation).",
          tags: ["PHP · MySQL", "Flutter · Firebase", "Chef de projet", "Prod"],
          image: "project_goutago",
          link: "https://goutago.com/",
        },
        {
          id: "stanvtc",
          category: "web",
          featured: false,
          title: "STAN VTC : Transport Collaboratif",
          summary: "Plateforme web & mobile de mise en relation pour le transport collaboratif.",
          description:
            "Analyse, conception et réalisation d'une plateforme de transport collaboratif : Flutter/Firebase (auth OTP/email, functions, Firestore, storage), API Google Places/Mapbox pour la géolocalisation.",
          tags: ["Flutter · Firebase", "API Google Places", "Mapbox", "Chef de projet"],
          image: "project_stanvtc",
          link: "https://stan.epsie-startup.com/",
        },
        {
          id: "budgetwise",
          category: "web",
          featured: false,
          title: "BudgetWise : Suivi Budgétaire (PlayStore)",
          summary: "App Android de gestion financière personnelle et familiale, publiée sur PlayStore.",
          description:
            "Application mobile de suivi budgétaire inspirée d'un modèle Excel de gestion financière, avec interface mobile moderne. Développée avec Abel KACOU (Flutter, PHP, MySQL).",
          tags: ["Flutter", "PHP · MySQL", "PlayStore"],
          image: "project_budgetwise",
          link: "https://epsie-startup.com/index.php?page=budgetwise",
        },
        {
          id: "campus",
          category: "web",
          featured: false,
          title: "Camp'us : Intégration Sociale Étudiante",
          summary: "App mobile pour créer, découvrir et rejoindre des activités entre étudiants.",
          description:
            "Projet d'école (ESIR/INSOC) en équipe : application mobile de mise en relation par activités et proximité. React Native/Expo pour la première version, puis migration vers Flutter/Firebase.",
          tags: ["React Native", "Flutter · Firebase", "Travail d'équipe"],
          image: "project_campus",
        },
        {
          id: "monitoringschool",
          category: "web",
          featured: false,
          title: "ERP : Gestion des Inspections Scolaires",
          summary: "Chef de projet & DevOps : ERP PHP/Laravel déployé en production.",
          description:
            "Analyse, conception et réalisation d'un ERP pour la gestion des inspections des écoles primaires de Côte d'Ivoire : PHP/Laravel, PHPUnit, pipeline GitLab CI/CD, containerisation Docker, VPS Linux (configuration, sécurisation, monitoring).",
          tags: ["PHP · Laravel", "Docker", "GitLab CI/CD", "VPS Linux"],
          image: "project_monitoringschool",
        },
        {
          id: "port_escale",
          category: "web",
          featured: false,
          title: "Gestion d'Escales Portuaires : Modules WebDev & Oracle",
          summary: "Modules métier pour la planification et le suivi des escales dans un port.",
          description:
            "Développement de modules WebDev connectés à une base Oracle pour la gestion d'escales portuaires : planning, agenda, paiement des recettes en ligne, visualisation cartographique (API Marine Traffic) et listing des navires à proximité (API Datalistic).",
          tags: ["WebDev", "Oracle", "API Marine Traffic", "API Datalistic"],
          image: "project_port_escale",
        },
        {
          id: "epsie_shop",
          category: "web",
          featured: false,
          title: "Écosystème EPSIE : Sites, Boutique & API de Paiement",
          summary: "Vitrine, boutique en ligne et API de simulation de paiement (WAVE CI).",
          description:
            "Site web principal d'EPSIE (PHP/PDO/MVC, MySQL) avec vitrine et API REST simulant le système de paiement WAVE CI ; sous-domaine boutique en ligne (licences logicielles, abonnements) ; sous-domaine API multi-opérateur de paiement.",
          tags: ["PHP · PDO · MVC", "MySQL", "API REST", "Paiement en ligne"],
          image: "project_epsie_shop",
          link: "https://epsie-startup.com",
        },
        {
          id: "gestcomlite",
          category: "web",
          featured: false,
          title: "GestComLite : Logiciel de Point de Vente",
          summary: "Solution desktop client/serveur de gestion commerciale sous WinDev.",
          description:
            "Gestion de stock, vente, ticket de caisse, code-barres, gestion client/fournisseur, statistiques. Architecture client/serveur compatible Windows, avec HFSQL.",
          tags: ["WinDev", "HFSQL", "Client/Serveur"],
          image: "project_gestcomlite",
          link: "https://epsie-startup.com/index.php?page=gestcomlite",
        },
        {
          id: "leavetracking",
          category: "web",
          featured: false,
          title: "LeaveTracking : Suivi des Absences Étudiantes",
          summary: "Application client/serveur multi-écoles de suivi des absences, avec documents officiels générés automatiquement.",
          description:
            "Application client/serveur dédiée au suivi des absences étudiantes : gestion multi-écoles, années, semestres, filières et classes, avec rapports détaillés et génération automatisée de documents officiels (avis d'absence, justificatifs).",
          tags: ["WinDev", "HFSQL", "Multi-écoles", "Rapports automatisés"],
          image: "project_leavetracking",
          link: "https://epsie-startup.com/index.php?page=leavetracking",
        },
        {
          id: "gestcheque",
          category: "web",
          featured: false,
          title: "GestCheque : Gestion des Chèques & Paiements",
          summary: "Solution desktop de suivi des chèques et paiements, couplée à l'application ImprimChèques.",
          description:
            "Solution de gestion des chèques et paiements : impression des chèques, suivi des opérations, couplée à l'application ImprimChèques.",
          tags: ["WinDev", "HFSQL", "Impression de chèques"],
          image: "project_gestcheque",
          link: "https://epsie-startup.com/index.php?page=downloads",
        },
        {
          id: "fundsleave",
          category: "web",
          featured: false,
          title: "FundsLeave : Demandes de Fonds & Congés",
          summary: "Solution de gestion digitale des demandes de fonds et des congés.",
          description:
            "Solution de gestion digitale des demandes de fonds et des congés, développée avec Stephane KROWY.",
          tags: ["PHP · Laravel", "MySQL"],
          image: "project_fundsleave",
          link: "https://epsie-startup.com/index.php?page=downloads",
        },
        {
          id: "inpaf",
          category: "web",
          featured: false,
          title: "INPAF : Réseau des Anciens Élèves de l'INP-HB en France",
          summary: "Application web du réseau alumni INP-HB en France, avec pipeline DevSecOps.",
          description:
            "Application web destinée au réseau des anciens élèves de l'INP-HB en France : migration Django puis Flask + React (servi par Vite), MySQL, pipeline CI/CD GitHub Actions, configuration et administration d'un serveur Ubuntu.",
          tags: ["Django", "Flask", "React · Vite", "GitHub Actions", "Ubuntu Server"],
          image: "project_inpaf",
        },
        {
          id: "badge_scanner",
          category: "embedded",
          featured: false,
          title: "Badge Scanner : Contrôle d'Accès RFID",
          summary: "Système d'enregistrement et de détection de badge RFID.",
          description:
            "Montage WEMOS + module RFID, serveur Node.js/Express exposant une API, et application web de suivi des accès.",
          tags: ["WEMOS", "RFID", "Node.js / Express", "API"],
          image: "project_badge_scanner",
        },
        {
          id: "iot_lora",
          category: "embedded",
          featured: false,
          title: "IoT Transmitter : Acquisition & Transmission LoRa",
          summary: "Chaîne complète : acquisition, formatage, transmission, stockage, diffusion.",
          description:
            "Transmission de mesures (température, humidité...) via LoRa vers un serveur Node.js, avec stockage et diffusion des données collectées.",
          tags: ["LoRa", "IoT", "Node.js", "Capteurs"],
          image: "project_iot_lora",
        },
        {
          id: "robot_line_follower",
          category: "embedded",
          featured: false,
          title: "Robot Mobile : Suiveur de Ligne / Éviteur d'Obstacles",
          summary: "Robotique mobile : navigation par capteurs sur ESP32.",
          description:
            "Contrôle moteur (L298N, servomoteur), capteur ultrason HC-SR04, capteur suiveur de ligne KY-033, pilotage Bluetooth, logique de navigation embarquée sur ESP32.",
          tags: ["ESP32", "PWM", "Capteurs", "Robotique"],
          image: "project_robot_line_follower",
        },
        {
          id: "networking",
          category: "systems",
          featured: false,
          title: "Réseaux & Systèmes : BGP, VPLS, LAMP & Messagerie",
          summary: "TPs réseaux et administration système : routage inter-domaine, VPN de niveau 2, serveurs Linux.",
          description:
            "Configuration et vérification du routage eBGP/iBGP, mise en place d'un VPLS (Virtual Private LAN Service) via MPLS/LDP, authentification PPP (PAP/CHAP) sur liaisons série (sous Cisco Packet Tracer) ; installation d'un serveur LAMP/FTP et d'un serveur de messagerie (SMTP/IMAP/POP3, TLS/SSL) sous Linux (Ubuntu Server).",
          tags: ["BGP", "VPLS / MPLS", "PPP", "LAMP / FTP", "Serveur mail"],
          image: "project_networking",
        },
        {
          id: "cicd_java",
          category: "systems",
          featured: false,
          title: "Pipeline CI/CD : Jenkins, GitLab CI & Qualité de Code",
          summary: "Mise en place d'une chaîne CI/CD complète pour une application Java/Maven.",
          description:
            "Mise en place d'une chaîne CI/CD complète pour une application Java/Maven intégrant Jenkins et GitLab CI, avec contrôle de la qualité et du bon fonctionnement du code via SonarQube et JUnit.",
          tags: ["Jenkins", "GitLab CI", "SonarQube", "JUnit", "Java/Maven"],
          image: "project_cicd_java",
        },
        {
          id: "iot_dashboard",
          category: "embedded",
          featured: false,
          title: "Tableau de Bord Véhicule : ESP32-S3 & Arduino Uno",
          summary: "Interface tactile de simulation d'un tableau de bord automobile, en liaison maître/esclave avec un Arduino.",
          description:
            "Interface de tableau de bord automobile sur ESP32-S3-Touch-LCD-7 (écran tactile) affichant vitesse, RPM, température, distance et carburant en temps réel, en liaison UART avec un Arduino Uno gérant les composants physiques (potentiomètres, capteurs, LEDs, buzzer, HC-SR04).",
          tags: ["ESP32-S3", "Arduino Uno", "UART", "Écran tactile", "HC-SR04"],
          image: "project_iot_dashboard",
        },
        {
          id: "drone_pcb",
          category: "embedded",
          featured: false,
          title: "Conception PCB de Drone : Quadcopter",
          summary: "Conception d'un circuit imprimé de drone quadricoptère sous EasyEDA.",
          description: "Conception d'un PCB (circuit imprimé) pour un drone quadricoptère (Four Axises Aircraft) avec l'outil EasyEDA.",
          tags: ["EasyEDA", "PCB Design", "Drone", "Quadcopter"],
          image: "project_drone_pcb",
        },
        {
          id: "water_meter",
          category: "embedded",
          featured: false,
          title: "Compteur d'Eau Intelligent : Supervision IoT à Distance",
          summary: "Gestion à distance d'une électrovanne et d'un débitmètre via GSM/GPRS.",
          description:
            "Système de supervision et de gestion à distance d'un compteur d'eau : Arduino Mega, module SIM808 (GSM/GPRS), électrovanne et débitmètre, plateforme web PHP/MySQL sur serveur LAMP.",
          tags: ["Arduino Mega", "SIM808 (GSM/GPRS)", "PHP/MySQL", "LAMP"],
          image: "project_water_meter",
        },
        {
          id: "theorem_prover",
          category: "ia",
          featured: false,
          title: "Démonstrateur Automatique de Théorèmes : Logique Propositionnelle",
          summary: "Moteur d'inférence en IA symbolique, preuve par contradiction en logique propositionnelle.",
          description:
            "Démonstrateur automatique de théorèmes en logique propositionnelle : algorithme en 4 étapes, preuve par contradiction, moteur d'inférence appliquant Modus Ponens et Modus Tollens sur un ensemble d'axiomes.",
          tags: ["IA symbolique", "Java", "Moteur d'inférence", "Logique propositionnelle"],
          image: "project_theorem_prover",
        },
        {
          id: "java_oop",
          category: "algo",
          featured: false,
          title: "Java SE : Design Patterns & Programmation Orientée Objet",
          summary: "Deux applications Java illustrant les principes SOLID et les design patterns.",
          description:
            "Mini éditeur de texte (JavaFX) mettant en œuvre les principes SOLID et les design patterns Command, Memento et Strategy ; application console de gestion de tournois de football (Java SE) avec sérialisation et persistance de données par fichiers.",
          tags: ["Java SE", "JavaFX", "Design Patterns", "SOLID"],
          image: "project_java_oop",
        },
        {
          id: "image_math",
          category: "vision",
          featured: false,
          title: "Mathématiques pour l'Image : Restauration & Segmentation Variationnelle",
          summary: "Équation de la chaleur, restauration de Tikhonov et segmentation par contours actifs.",
          description:
            "Restauration d'images par équation de la chaleur, gradient/divergence/laplacien, restauration de Tikhonov, équation d'Euler-Lagrange ; segmentation par contours actifs et représentation Level Set ; segmentation par textures via recuit simulé, algorithmes de Metropolis et de Gibbs.",
          tags: ["Restauration variationnelle", "Level Set", "Contours actifs", "Recuit simulé"],
          image: "project_image_math",
        },
        {
          id: "dataflow_hpc",
          category: "systems",
          featured: true,
          title: "Dataflow & HPC : Déconvolution Radioastronomie (projet SKAO)",
          summary: "Stage R&D en cours : modélisation et parallélisation d'un pipeline HPC.",
          description:
            "Modélisation Dataflow (outil PREESM) d'un algorithme de déconvolution utilisé en radioastronomie, étude de la distribution et de la parallélisation du pipeline de traitement à l'IETR (INSA Rennes, équipe VAADER).",
          tags: ["PREESM", "Dataflow", "HPC", "Python / C"],
          image: "project_dataflow_hpc",
        },
        {
          id: "algorithms",
          category: "algo",
          featured: false,
          title: "Algorithmique : Complexité, ROBDD & Optimisation Combinatoire",
          summary: "De la complexité empirique aux algorithmes génétiques, en passant par les ROBDD.",
          description:
            "Comparaison complexité théorique/mesurée (tri par insertion, tri fusion) ; représentation de fonctions booléennes par ROBDD (expansion de Shannon, réduction, memoization) ; heuristiques pour problèmes NP-difficiles (Knapsack, TSP) via algorithmes génétiques et 2-opt.",
          tags: ["Complexité", "ROBDD", "Algorithmes génétiques", "TSP / Knapsack"],
          image: "project_algorithms",
        },
      ],
    },

    contact: {
      kicker: "Contact",
      title: "Discutons de votre projet",
      subtitle:
        "Alternance, stage, mission freelance ou simple échange technique : je réponds toujours.",
      emailLabel: "Email",
      phoneLabel: "Téléphone",
      locationLabel: "Localisation",
      location: "Rennes (35), France · mobile",
      ctaButton: "M'écrire un email",
      availabilityTitle: "Disponibilité",
      availability:
        "Alternance de 12 mois dès octobre 2026, ou stage de 6 mois dès février 2027, en présentiel, hybride ou 100% remote. Après l'obtention du diplôme (2027), ouvert à tout type de contrat (CDI, freelance, mission).",
      socialsTitle: "Retrouvez-moi",
    },

    footer: {
      text: "Tous droits réservés.",
      backToTop: "Haut de page",
    },

    themeToggle: { light: "Thème clair", dark: "Thème sombre" },
    langToggle: "EN",
  },

  en: {
    meta: {
      title: "Régis KESSÉ | Software Engineer · AI, LLM & RAG · Computer Vision",
      description:
        "Portfolio of Régis KESSÉ, software engineer (ESIR + ESI INP-HB) specialized in applied AI (LLM, RAG), computer vision and full-stack development.",
    },

    nav: {
      brand: "RK",
      links: [
        { key: "home", label: "Home" },
        { key: "about", label: "About" },
        { key: "skills", label: "Skills" },
        { key: "experience", label: "Experience" },
        { key: "projects", label: "Projects" },
        { key: "education", label: "Education" },
        { key: "contact", label: "Contact" },
      ],
      cv: "Resume",
    },

    hero: {
      hello: "Hi, I'm",
      name: "Régis KESSÉ",
      roles: [
        "Software Engineer",
        "AI & LLM Developer",
        "Computer Vision Engineer",
        "Full-Stack Developer",
        "RAG Systems Builder",
      ],
      tagline:
        "Master's-level engineering student (ESIR + ESI INP-HB) who likes building systems that actually run: from the deep learning model to the API that serves it, from raw data to the dashboard, from prototype to production.",
      badges: ["Rennes, France", "Available from October 2026", "12-month apprenticeship", "Open to remote"],
      ctaPrimary: "View my projects",
      ctaSecondary: "Download my resume",
      scrollHint: "Scroll",
      statsInline: [
        { value: 30, suffix: "+", label: "projects & labs" },
        { value: 3, suffix: "", label: "engineering schools" },
        { value: 15, suffix: "+", label: "technologies mastered" },
        { value: 5, suffix: "+", label: "years in IT" },
      ],
    },

    about: {
      kicker: "About",
      title: "Building things that work, not demos",
      paragraphs: [
        "I'm Régis KESSÉ, a 3rd-year software engineering student at ESIR (École Supérieure d'Ingénieurs de Rennes), Digital Imaging track, on a dual degree with ESI at INP-HB (Côte d'Ivoire), where I already completed an associate degree and a bachelor's in Electronics, Computer Science & Telecoms.",
        "Before ESIR, I spent several years in the field: systems and network administration, full-stack development (PHP/Laravel, Django, Flutter), part-time teaching on PC SOFT technologies, and running my own small structure, <strong>EPSIE</strong>, through which I shipped about a dozen production products: store-published mobile apps, ERPs, web platforms.",
        "Today I'm specializing in applied AI (deep learning, computer vision, LLM integration and RAG systems), without losing sight of what those years of development taught me: a model that doesn't answer a real-time HTTP request is just a notebook. I aim to do both: research and product.",
      ],
      quote: "An academic PoC and a working deliverable are not in the same league.",
      factsTitle: "At a glance",
      facts: [
        { icon: "fa-graduation-cap", label: "Education", value: "Engineer, ESIR + ESI INP-HB (MSc-level)" },
        { icon: "fa-location-dot", label: "Location", value: "Rennes, France · mobile" },
        { icon: "fa-language", label: "Languages", value: "French (native) · English (B2)" },
        { icon: "fa-briefcase", label: "Availability", value: "12-month apprenticeship from Oct. 2026 · remote-friendly" },
        { icon: "fa-rocket", label: "Side project", value: "Founder of EPSIE (indie dev studio)" },
        { icon: "fa-certificate", label: "Certifications", value: "MOS Excel · MTA Windows OS" },
      ],
    },

    skills: {
      kicker: "Skills",
      title: "A wide toolbox, from model to production",
      subtitle:
        "Applied AI and computer vision as a specialty, backed by a solid foundation in full-stack development, databases, DevOps and systems/networking, built over several years in the field before engineering school.",
      categories: [
        {
          icon: "fa-code",
          name: "Languages",
          items: ["Python", "C / C++", "Java", "JavaScript", "PHP", "Dart (Flutter)", "SQL", "MATLAB", "R", "WLangage"],
        },
        {
          icon: "fa-brain",
          name: "LLM & Generative AI",
          items: ["Ollama · LLaMA 3 (local)", "Gemini API", "LlamaIndex (RAG)", "Sentence-Transformers", "pgvector · ChromaDB", "Prompt engineering", "n8n (AI workflows)"],
        },
        {
          icon: "fa-diagram-project",
          name: "Machine Learning & Deep Learning",
          items: ["Keras / TensorFlow", "CNN · Transfer Learning", "U-Net (segmentation)", "scikit-learn (SVM, RF, AdaBoost)", "NLP (NLTK, TF-IDF)", "Symbolic AI"],
        },
        {
          icon: "fa-eye",
          name: "Computer Vision",
          items: ["OpenCV", "ViSP", "Segmentation (k-means)", "Epipolar geometry", "Photogrammetry / SfM", "FFT / DCT", "YOLOv8"],
        },
        {
          icon: "fa-cube",
          name: "Graphics & 3D",
          items: ["OpenGL / GLSL / GLM", "Unity / C#", "Qt / C++", "Animation & inverse kinematics", "VHDL / FPGA"],
        },
        {
          icon: "fa-server",
          name: "Web & Backend",
          items: ["Django REST Framework", "Node.js / Express", "Laravel · Livewire", "Flask", "React", "Flutter / Firebase", "Bootstrap"],
        },
        {
          icon: "fa-database",
          name: "Databases",
          items: ["PostgreSQL (+ pgvector)", "MySQL", "Oracle", "SQL Server", "HFSQL", "Firestore / NoSQL"],
        },
        {
          icon: "fa-boxes-stacked",
          name: "DevOps & Cloud",
          items: ["Docker", "GitLab CI/CD", "Jenkins", "GitHub Actions", "SonarQube · JUnit", "Linux / Windows Server", "Google Cloud"],
        },
        {
          icon: "fa-network-wired",
          name: "Networking & Security",
          items: ["BGP / VPLS / MPLS", "PPP (PAP/CHAP)", "SOPHOS Firewall", "Kaspersky Endpoint", "Active Directory (AD DS)"],
        },
        {
          icon: "fa-microchip",
          name: "Embedded & IoT",
          items: ["Arduino", "ESP32", "RFID", "LoRa", "Sensors & actuators"],
        },
        {
          icon: "fa-diagram-successor",
          name: "Tools & Methods",
          items: ["Git", "Agile / Scrum", "Jira", "Grafana · Prometheus · Loki", "AutoCAD · QGis"],
        },
      ],
    },

    experience: {
      kicker: "Experience",
      title: "Professional experience",
      subtitle: "From the field (sysadmin, dev, teaching) to R&D in engineering school.",
      items: [
        {
          period: "07/2026-09/2026 (ongoing)",
          title: "R&D Intern, Dataflow & HPC Modeling (SKAO project)",
          company: "IETR, INSA Rennes (VAADER team)",
          location: "Rennes, France",
          icon: "fa-flask",
          points: [
            "Dataflow modeling (PREESM tool) of a deconvolution algorithm used in radio astronomy",
            "Study of distribution and parallelization of an HPC data-processing pipeline",
            "Python/C implementation, reproducible experiments, technical documentation",
          ],
        },
        {
          period: "03/2020-present",
          title: "Founder & Full-Stack Developer",
          company: "EPSIE (independent dev studio)",
          location: "Rennes / Abidjan (remote)",
          icon: "fa-rocket",
          points: [
            "Design and production release of about a dozen products: ERPs, store-published mobile apps, web platforms",
            "Project lead on third-party platforms: food delivery (GoutaGo), ride-hailing (STAN), port call management",
            "Linux VPS administration, GitLab CI/CD pipelines, Docker containerization",
          ],
        },
        {
          period: "09/2020-05/2023",
          title: "Developer & IT Technician",
          company: "OCSI-CI SARL",
          location: "Abidjan, Côte d'Ivoire",
          icon: "fa-laptop-code",
          points: [
            "Python/Django and PHP/Laravel application development, data structuring",
            "Full-stack desktop development on WinDev, graphic design (Photoshop, AutoCAD)",
            "User technical support and maintenance of production systems",
          ],
        },
        {
          period: "09/2020-08/2023",
          title: "Part-time Lecturer, PC SOFT Technologies",
          company: "INP-HB / ESI",
          location: "Yamoussoukro, Côte d'Ivoire",
          icon: "fa-chalkboard-user",
          points: [
            "Development labs (WinDev, WebDev, WinDev Mobile)",
            "Wrote teaching materials, mentored students",
          ],
        },
        {
          period: "05/2023-08/2023",
          title: "Systems & Network Engineer",
          company: "SIGASECURITE",
          location: "Abidjan, Côte d'Ivoire",
          icon: "fa-shield-halved",
          points: [
            "Windows Server administration (AD DS), SQL Server, ERPs (SAGE i7, Odoo)",
            "Operational security: SOPHOS firewall, Kaspersky Endpoint antivirus, Acronis backups",
            "Mail administration (IONOS, M365), LAN and telephony supervision",
          ],
        },
        {
          period: "08/2018 (1 month)",
          title: "IT Maintenance, LAN Technician",
          company: "LOGIMATIQUE",
          location: "Abidjan, Côte d'Ivoire",
          icon: "fa-tools",
          points: [
            "First professional experience: introduction to the corporate world",
            "Studied a point-of-sale management software (pharmacy) and a Windows Server setup",
          ],
        },
      ],
    },

    education: {
      kicker: "Education",
      title: "Academic background",
      items: [
        {
          period: "09/2025-2027 (3rd year, ongoing)",
          degree: "Software Engineering, Digital Imaging track",
          school: "ESIR, École Supérieure d'Ingénieurs de Rennes, Université de Rennes",
          details: "Dual degree ESIR/ESI · Computer vision · Deep learning · Generative AI · 3D reconstruction · Software architecture",
          logo: "logo_esir",
        },
        {
          period: "09/2023-2026",
          degree: "EIT Engineering (Electronics, Computer Science & Telecoms)",
          school: "ESI, INP-HB, Yamoussoukro, Côte d'Ivoire",
          details: "Signal processing · Symbolic AI · Databases · Information systems · Networking",
          logo: "logo_esi_inphb",
        },
        {
          period: "09/2017-08/2020",
          degree: "Associate Degree, Electronics, Computer Science & Telecoms",
          school: "ESI, INP-HB, Yamoussoukro, Côte d'Ivoire",
          details: "Fundamentals of electronics, telecoms and industrial computing",
          logo: "logo_esi_inphb",
        },
      ],
      certifications: {
        title: "Certifications",
        items: [
          { name: "Microsoft Office Specialist", issuer: "Excel" },
          { name: "Microsoft Technology Associate", issuer: "Windows® Operating System Fundamentals" },
        ],
      },
    },

    epsie: {
      kicker: "Side project",
      title: "EPSIE, my own development studio",
      description:
        "In 2020, I founded EPSIE (IT & Electronics Services Company), a small team of engineers built around concrete projects: web/mobile development, IT maintenance, electronics and IoT. It's where I learned to own a product end to end, from design to customer support.",
      membersTitle: "Team",
      members: ["Régis KESSÉ", "Franck KOUASSI", "Abel KACOU", "Ivane COULIBALY"],
      link: "https://epsie-startup.com",
      linkLabel: "epsie-startup.com",
    },

    projects: {
      kicker: "Projects",
      title: "Projects & achievements",
      subtitle: "A selection of academic and personal projects, filterable by domain.",
      filters: [
        { key: "all", label: "All" },
        { key: "ia", label: "AI & LLM" },
        { key: "vision", label: "Computer Vision" },
        { key: "graphics", label: "Graphics & 3D" },
        { key: "web", label: "Web & Mobile" },
        { key: "embedded", label: "Embedded & IoT" },
        { key: "systems", label: "Systems & Networking" },
        { key: "algo", label: "Algorithms" },
      ],
      viewMore: "View details",
      close: "Close",
      visit: "View live",
      items: [
        {
          id: "rag_assistant",
          category: "ia",
          featured: true,
          title: "Local RAG Assistant: LlamaIndex, PostgreSQL/pgvector & Ollama",
          summary: "A fully local Retrieval-Augmented Generation question-answering system.",
          description:
            "Full indexing → retrieval → generation pipeline: orchestration with LlamaIndex, document vectorization via Sentence-Transformers (all-MiniLM-L6-v2), vector storage and search under PostgreSQL (pgvector extension) and ChromaDB, answer generation by a local LLM (Ollama, llama3:8b). No dependency on any external API.",
          tags: ["RAG", "LlamaIndex", "Sentence-Transformers", "PostgreSQL / pgvector", "ChromaDB", "Ollama · LLaMA 3"],
          image: "project_rag_assistant",
        },
        {
          id: "chatbot_llm",
          category: "ia",
          featured: true,
          title: "Spam Detector + Local LLM Chatbot",
          summary: "Django REST app: deep-learning spam detection, extended with a local LLM chatbot.",
          description:
            "NLP pipeline (TF-IDF, NLTK) and a Keras/TensorFlow DNN model trained on real emails, served in real time via a Django REST API. Extended with a conversational chatbot based on Ollama/LLaMA 3 running locally (inference with no data sent externally), native API integration in the same app.",
          tags: ["Python", "Django REST", "Keras / TensorFlow", "Ollama · LLaMA 3", "NLP · NLTK", "MySQL"],
          image: "project_chatbot_llm",
        },
        {
          id: "n8n_pipeline",
          category: "ia",
          featured: false,
          title: "Automated Monitoring Pipeline: n8n & Gemini API",
          summary: "Full orchestration of an LLM workflow on real data.",
          description:
            "n8n workflow: Cron → HTTP (Google News RSS) → filter → automatic summary via Gemini API → Google Docs archiving → Gmail delivery. End-to-end error handling and semantic filtering.",
          tags: ["n8n", "Gemini API", "LLM", "Automation", "Google Workspace"],
          image: "project_n8n_pipeline",
        },
        {
          id: "deep_learning_tps",
          category: "ia",
          featured: false,
          title: "Deep Learning & Machine Learning Labs (9 labs)",
          summary: "From Decision Trees to U-Net: a full path from supervised classification to vision.",
          description:
            "9 labs covering supervised learning (Decision Trees, SVM, Random Forests, AdaBoost, Bayesian), neural networks in TensorFlow (GradientTape, autodiff), CNNs (Sequential & Functional API), Transfer Learning (MobileNetV2, fine-tuning) and semantic segmentation (U-Net, CARLA dataset).",
          tags: ["TensorFlow / Keras", "CNN", "Transfer Learning", "U-Net", "scikit-learn"],
          image: "project_deep_learning_tps",
        },
        {
          id: "vision_pipeline",
          category: "vision",
          featured: true,
          title: "Image Processing Pipeline: Filtering, Morphology & Segmentation",
          summary: "From 2D convolution to seam carving, in C++/ViSP and Python/OpenCV.",
          description:
            "2D convolution, Sobel/Gaussian filters, binary & grayscale morphology, k-means segmentation, skeletonization, seam carving (dynamic programming / Viterbi). Implemented in C++ (ViSP) and Python (OpenCV/NumPy).",
          tags: ["C++ / ViSP", "Python / OpenCV", "k-means", "Seam Carving", "Morphology"],
          image: "project_vision_pipeline",
        },
        {
          id: "epipolar",
          category: "vision",
          featured: false,
          title: "Epipolar Geometry: 3D Reconstruction & Stereo Vision",
          summary: "Pinhole projection modeling and computation of the F and E matrices.",
          description:
            "Pinhole projection model, intrinsic/extrinsic matrices, epipolar constraint, computation of the fundamental (F) and essential (E) matrices, epipolar lines, stereo rectification. Python/NumPy implementation.",
          tags: ["Epipolar geometry", "Camera calibration", "Python / NumPy", "Stereo vision"],
          image: "project_epipolar",
        },
        {
          id: "jpeg_compression",
          category: "vision",
          featured: false,
          title: "Image Compression: FFT, DCT & JPEG Encoder",
          summary: "2D FFT, a simplified JPEG encoder and end-to-end entropy coding.",
          description:
            "2D FFT (Cooley-Tukey), low-pass/high-pass frequency filtering, simplified JPEG encoder (8×8 block DCT, quantization, zig-zag scan), rate-distortion curves (PSNR, MSE), entropy coding (Huffman, arithmetic).",
          tags: ["FFT / DCT", "JPEG encoder", "PSNR / MSE", "Huffman"],
          image: "project_jpeg_compression",
        },
        {
          id: "drone_mapping",
          category: "vision",
          featured: false,
          title: "Drone Mapping & 3D Modeling",
          summary: "Drone piloting, 3D reconstruction and GIS mapping.",
          description:
            "Project run with EVANOV (QHSE/CSR consulting firm): drone piloting and aerial imagery, 3D site reconstruction via photogrammetry (Agisoft Metashape), GIS mapping output (QGis).",
          tags: ["Drone piloting", "Photogrammetry / SfM", "Agisoft Metashape", "QGis"],
          image: "project_drone_mapping",
        },
        {
          id: "opengl",
          category: "graphics",
          featured: false,
          title: "Image Synthesis: OpenGL",
          summary: "4 progressive labs: from basic shaders to shadow maps and god rays.",
          description:
            "VBO/EBO/VAO, GLSL shaders, model/view/projection transforms; texture mapping and Phong shading, normal mapping; cube maps, skybox, reflection mapping, fog, frame buffers, cel shading; shadow maps, dynamic shadows and god rays.",
          tags: ["OpenGL", "GLSL", "GLM", "Shaders", "Real-time rendering"],
          image: "project_opengl",
        },
        {
          id: "animation_3d",
          category: "graphics",
          featured: false,
          title: "3D Animation & Inverse Kinematics",
          summary: "Scene graph, Hermite splines, CCD and mass-spring simulation.",
          description:
            "Scene graph and insect animation via trajectory interpolation (Hermite splines); inverse kinematics via CCD (Cyclic Coordinate Descent) on poly-articulated chains; cloth simulation via a mass-spring system with physical constraints.",
          tags: ["3D animation", "Inverse kinematics", "CCD", "Mass-spring systems"],
          image: "project_animation_3d",
        },
        {
          id: "hyperdrift",
          category: "graphics",
          featured: false,
          title: "HYPERDRIFT: Unity Game (infinite space flight)",
          summary: "Procedural infinite space runner with collision feedback and an animated Game Over.",
          description:
            "Spaceship flight game with infinite scrolling through a procedurally generated futuristic corridor, progressive speed, static and moving obstacles, health system with feedback (screen shake) and ship break-apart on Game Over.",
          tags: ["Unity", "C#", "Prefabs", "Particle Effects", "NavMesh"],
          image: "project_hyperdrift",
        },
        {
          id: "bidnaepay",
          category: "web",
          featured: true,
          title: "BIDNAE PAY: Electronic Payment Gateway",
          summary: "Mobile payment aggregator (Orange Money, Wave) for BIDNAE SARL, as project lead & DevSecOps.",
          description:
            "Ivorian electronic payment aggregator/gateway built for BIDNAE SARL by the EPSIE team, which I lead as project manager and DevSecOps. The first version integrates the Orange Money and Wave operators. Also built BIDNAE SARL's showcase website (bidnae.goutago.com) in parallel.",
          tags: ["Laravel", "Livewire", "MySQL", "Ubuntu Server", "Nginx", "Docker", "GitHub Actions", "REST API", "Monitoring"],
          image: "project_bidnaepay",
          link: "https://bidnaepay.goutago.com/",
        },
        {
          id: "goutago",
          category: "web",
          featured: true,
          title: "GoutaGo: Delivery Platform",
          summary: "Project lead & developer: connecting customers, couriers and restaurants.",
          description:
            "Analysis, design (MERISE/UML) and delivery of a web & mobile food-delivery platform: PHP/MySQL web interface for couriers and managers, Flutter/Firebase mobile app for customers (auth, real-time orders, geolocation).",
          tags: ["PHP · MySQL", "Flutter · Firebase", "Project lead", "Production"],
          image: "project_goutago",
          link: "https://goutago.com/",
        },
        {
          id: "stanvtc",
          category: "web",
          featured: false,
          title: "STAN VTC: Ride Sharing",
          summary: "Web & mobile platform matching riders and drivers for collaborative transport.",
          description:
            "Analysis, design and delivery of a collaborative transport platform: Flutter/Firebase (OTP/email auth, functions, Firestore, storage), Google Places/Mapbox APIs for geolocation.",
          tags: ["Flutter · Firebase", "Google Places API", "Mapbox", "Project lead"],
          image: "project_stanvtc",
          link: "https://stan.epsie-startup.com/",
        },
        {
          id: "budgetwise",
          category: "web",
          featured: false,
          title: "BudgetWise: Budget Tracking (PlayStore)",
          summary: "Personal & family finance Android app, published on the PlayStore.",
          description:
            "Budget-tracking mobile app inspired by an Excel financial-tracking model, with a modern mobile interface. Built with Abel KACOU (Flutter, PHP, MySQL).",
          tags: ["Flutter", "PHP · MySQL", "PlayStore"],
          image: "project_budgetwise",
          link: "https://epsie-startup.com/index.php?page=budgetwise",
        },
        {
          id: "campus",
          category: "web",
          featured: false,
          title: "Camp'us: Student Social Integration",
          summary: "Mobile app to create, discover and join activities among students.",
          description:
            "Team school project (ESIR/INSOC): mobile app connecting people through nearby activities. React Native/Expo for the first version, then migrated to Flutter/Firebase.",
          tags: ["React Native", "Flutter · Firebase", "Team project"],
          image: "project_campus",
        },
        {
          id: "monitoringschool",
          category: "web",
          featured: false,
          title: "ERP: School Inspection Management",
          summary: "Project lead & DevOps: PHP/Laravel ERP deployed to production.",
          description:
            "Analysis, design and delivery of an ERP for managing primary-school inspections in Côte d'Ivoire: PHP/Laravel, PHPUnit, GitLab CI/CD pipeline, Docker containerization, Linux VPS (configuration, hardening, monitoring).",
          tags: ["PHP · Laravel", "Docker", "GitLab CI/CD", "Linux VPS"],
          image: "project_monitoringschool",
        },
        {
          id: "port_escale",
          category: "web",
          featured: false,
          title: "Port Call Management: WebDev & Oracle Modules",
          summary: "Business modules for planning and tracking port calls.",
          description:
            "Development of WebDev modules connected to an Oracle database for port call management: scheduling, agenda, online revenue payment, map visualization (Marine Traffic API) and nearby vessel listing (Datalistic API).",
          tags: ["WebDev", "Oracle", "Marine Traffic API", "Datalistic API"],
          image: "project_port_escale",
        },
        {
          id: "epsie_shop",
          category: "web",
          featured: false,
          title: "EPSIE Ecosystem: Websites, Shop & Payment API",
          summary: "Showcase site, online shop and a payment-simulation API (WAVE CI).",
          description:
            "EPSIE's main website (PHP/PDO/MVC, MySQL) with a showcase and a REST API simulating the WAVE CI payment system; an online shop subdomain (software licenses, subscriptions); a multi-operator payment API subdomain.",
          tags: ["PHP · PDO · MVC", "MySQL", "REST API", "Online payment"],
          image: "project_epsie_shop",
          link: "https://epsie-startup.com",
        },
        {
          id: "gestcomlite",
          category: "web",
          featured: false,
          title: "GestComLite: Point-of-Sale Software",
          summary: "Client/server desktop retail management solution built with WinDev.",
          description:
            "Stock management, sales, receipts, barcoding, customer/supplier management, statistics. Windows-compatible client/server architecture, with HFSQL.",
          tags: ["WinDev", "HFSQL", "Client/Server"],
          image: "project_gestcomlite",
          link: "https://epsie-startup.com/index.php?page=gestcomlite",
        },
        {
          id: "leavetracking",
          category: "web",
          featured: false,
          title: "LeaveTracking: Student Absence Tracking",
          summary: "Multi-school client/server absence tracking app, with automatically generated official documents.",
          description:
            "Client/server application dedicated to tracking student absences: multi-school, year, semester, program and class management, with detailed reports and automated generation of official documents (absence notices, supporting documents).",
          tags: ["WinDev", "HFSQL", "Multi-school", "Automated reports"],
          image: "project_leavetracking",
          link: "https://epsie-startup.com/index.php?page=leavetracking",
        },
        {
          id: "gestcheque",
          category: "web",
          featured: false,
          title: "GestCheque: Check & Payment Management",
          summary: "Desktop check and payment tracking solution, paired with the ImprimChèques app.",
          description:
            "Check and payment management solution: check printing, transaction tracking, paired with the ImprimChèques application.",
          tags: ["WinDev", "HFSQL", "Check printing"],
          image: "project_gestcheque",
          link: "https://epsie-startup.com/index.php?page=downloads",
        },
        {
          id: "fundsleave",
          category: "web",
          featured: false,
          title: "FundsLeave: Fund & Leave Requests",
          summary: "Digital management solution for fund and leave requests.",
          description: "Digital management solution for fund and leave requests, built with Stephane KROWY.",
          tags: ["PHP · Laravel", "MySQL"],
          image: "project_fundsleave",
          link: "https://epsie-startup.com/index.php?page=downloads",
        },
        {
          id: "inpaf",
          category: "web",
          featured: false,
          title: "INPAF: INP-HB Alumni Network in France",
          summary: "Alumni network web app for INP-HB graduates in France, with a DevSecOps pipeline.",
          description:
            "Web application for the network of INP-HB alumni in France: migrated from Django to Flask + React (served by Vite), MySQL, GitHub Actions CI/CD pipeline, configuration and administration of an Ubuntu server.",
          tags: ["Django", "Flask", "React · Vite", "GitHub Actions", "Ubuntu Server"],
          image: "project_inpaf",
        },
        {
          id: "badge_scanner",
          category: "embedded",
          featured: false,
          title: "Badge Scanner: RFID Access Control",
          summary: "RFID badge registration and detection system.",
          description:
            "WEMOS + RFID module setup, a Node.js/Express server exposing an API, and a web app for access tracking.",
          tags: ["WEMOS", "RFID", "Node.js / Express", "API"],
          image: "project_badge_scanner",
        },
        {
          id: "iot_lora",
          category: "embedded",
          featured: false,
          title: "IoT Transmitter: LoRa Acquisition & Transmission",
          summary: "Full chain: acquisition, formatting, transmission, storage, broadcasting.",
          description:
            "Transmission of measurements (temperature, humidity...) via LoRa to a Node.js server, with storage and broadcasting of the collected data.",
          tags: ["LoRa", "IoT", "Node.js", "Sensors"],
          image: "project_iot_lora",
        },
        {
          id: "robot_line_follower",
          category: "embedded",
          featured: false,
          title: "Mobile Robot: Line Follower / Obstacle Avoider",
          summary: "Mobile robotics: sensor-based navigation on ESP32.",
          description:
            "Motor control (L298N, servo), HC-SR04 ultrasonic sensor, KY-033 line-following sensor, Bluetooth control, onboard navigation logic on ESP32.",
          tags: ["ESP32", "PWM", "Sensors", "Robotics"],
          image: "project_robot_line_follower",
        },
        {
          id: "networking",
          category: "systems",
          featured: false,
          title: "Networking & Systems: BGP, VPLS, LAMP & Mail",
          summary: "Networking and sysadmin labs: inter-domain routing, layer-2 VPNs, Linux servers.",
          description:
            "Configuration and verification of eBGP/iBGP routing, setting up a VPLS (Virtual Private LAN Service) via MPLS/LDP, PPP authentication (PAP/CHAP) on serial links (under Cisco Packet Tracer); setting up a LAMP/FTP server and a mail server (SMTP/IMAP/POP3, TLS/SSL) on Linux (Ubuntu Server).",
          tags: ["BGP", "VPLS / MPLS", "PPP", "LAMP / FTP", "Mail server"],
          image: "project_networking",
        },
        {
          id: "cicd_java",
          category: "systems",
          featured: false,
          title: "CI/CD Pipeline: Jenkins, GitLab CI & Code Quality",
          summary: "Full CI/CD pipeline setup for a Java/Maven application.",
          description:
            "Full CI/CD pipeline setup for a Java/Maven application integrating Jenkins and GitLab CI, with code quality and correctness checks via SonarQube and JUnit.",
          tags: ["Jenkins", "GitLab CI", "SonarQube", "JUnit", "Java/Maven"],
          image: "project_cicd_java",
        },
        {
          id: "iot_dashboard",
          category: "embedded",
          featured: false,
          title: "Vehicle Dashboard: ESP32-S3 & Arduino Uno",
          summary: "Touch-based car dashboard simulation, master/slave linked to an Arduino.",
          description:
            "Car dashboard interface on an ESP32-S3-Touch-LCD-7 (touchscreen) displaying speed, RPM, temperature, distance and fuel in real time, UART-linked to an Arduino Uno handling the physical components (potentiometers, sensors, LEDs, buzzer, HC-SR04).",
          tags: ["ESP32-S3", "Arduino Uno", "UART", "Touchscreen", "HC-SR04"],
          image: "project_iot_dashboard",
        },
        {
          id: "drone_pcb",
          category: "embedded",
          featured: false,
          title: "Drone PCB Design: Quadcopter",
          summary: "Quadcopter drone PCB design under EasyEDA.",
          description: "PCB (printed circuit board) design for a quadcopter drone (four-axis aircraft) using the EasyEDA tool.",
          tags: ["EasyEDA", "PCB Design", "Drone", "Quadcopter"],
          image: "project_drone_pcb",
        },
        {
          id: "water_meter",
          category: "embedded",
          featured: false,
          title: "Smart Water Meter: Remote IoT Monitoring",
          summary: "Remote management of a solenoid valve and flow meter via GSM/GPRS.",
          description:
            "Remote supervision and management system for a water meter: Arduino Mega, SIM808 module (GSM/GPRS), solenoid valve and flow meter, PHP/MySQL web platform on a LAMP server.",
          tags: ["Arduino Mega", "SIM808 (GSM/GPRS)", "PHP/MySQL", "LAMP"],
          image: "project_water_meter",
        },
        {
          id: "theorem_prover",
          category: "ia",
          featured: false,
          title: "Automated Theorem Prover: Propositional Logic",
          summary: "Symbolic-AI inference engine, proof by contradiction in propositional logic.",
          description:
            "Automated theorem prover in propositional logic: 4-step algorithm, proof by contradiction, inference engine applying Modus Ponens and Modus Tollens over a set of axioms.",
          tags: ["Symbolic AI", "Java", "Inference engine", "Propositional logic"],
          image: "project_theorem_prover",
        },
        {
          id: "java_oop",
          category: "algo",
          featured: false,
          title: "Java SE: Design Patterns & Object-Oriented Programming",
          summary: "Two Java applications illustrating SOLID principles and design patterns.",
          description:
            "Mini text editor (JavaFX) implementing SOLID principles and the Command, Memento and Strategy design patterns; console-based football tournament management app (Java SE) with file-based data serialization and persistence.",
          tags: ["Java SE", "JavaFX", "Design Patterns", "SOLID"],
          image: "project_java_oop",
        },
        {
          id: "image_math",
          category: "vision",
          featured: false,
          title: "Mathematics for Imaging: Restoration & Variational Segmentation",
          summary: "Heat equation, Tikhonov restoration and active-contour segmentation.",
          description:
            "Image restoration via the heat equation, gradient/divergence/Laplacian, Tikhonov restoration, Euler-Lagrange equation; active-contour segmentation and Level Set representation; texture-based segmentation via simulated annealing, Metropolis and Gibbs algorithms.",
          tags: ["Variational restoration", "Level Set", "Active contours", "Simulated annealing"],
          image: "project_image_math",
        },
        {
          id: "dataflow_hpc",
          category: "systems",
          featured: true,
          title: "Dataflow & HPC: Radio Astronomy Deconvolution (SKAO project)",
          summary: "Ongoing R&D internship: modeling and parallelizing an HPC pipeline.",
          description:
            "Dataflow modeling (PREESM tool) of a deconvolution algorithm used in radio astronomy, studying the distribution and parallelization of the processing pipeline at IETR (INSA Rennes, VAADER team).",
          tags: ["PREESM", "Dataflow", "HPC", "Python / C"],
          image: "project_dataflow_hpc",
        },
        {
          id: "algorithms",
          category: "algo",
          featured: false,
          title: "Algorithms: Complexity, ROBDDs & Combinatorial Optimization",
          summary: "From empirical complexity to genetic algorithms, via ROBDDs.",
          description:
            "Theoretical vs. measured complexity comparison (insertion sort, merge sort); Boolean function representation via ROBDDs (Shannon expansion, reduction, memoization); heuristics for NP-hard problems (Knapsack, TSP) via genetic algorithms and 2-opt.",
          tags: ["Complexity", "ROBDD", "Genetic algorithms", "TSP / Knapsack"],
          image: "project_algorithms",
        },
      ],
    },

    contact: {
      kicker: "Contact",
      title: "Let's talk about your project",
      subtitle: "Apprenticeship, internship, freelance work, or just a technical chat: I always reply.",
      emailLabel: "Email",
      phoneLabel: "Phone",
      locationLabel: "Location",
      location: "Rennes (35), France · mobile",
      ctaButton: "Email me",
      availabilityTitle: "Availability",
      availability:
        "12-month apprenticeship from October 2026, or a 6-month internship from February 2027, on-site, hybrid or fully remote. After graduating (2027), open to any type of contract (permanent, freelance, contract work).",
      socialsTitle: "Find me online",
    },

    footer: {
      text: "All rights reserved.",
      backToTop: "Back to top",
    },

    themeToggle: { light: "Light theme", dark: "Dark theme" },
    langToggle: "FR",
  },
};

const SOCIALS = [
  { name: "Email", icon: "fa-solid fa-envelope", url: "mailto:kessegabriel@gmail.com" },
  { name: "Phone", icon: "fa-solid fa-phone", url: "tel:+33689395726" },
  { name: "LinkedIn", icon: "fa-brands fa-linkedin", url: "https://www.linkedin.com/in/etchien-regis-marcel-kesse-2400b3200/" },
  { name: "GitHub", icon: "fa-brands fa-github", url: "https://github.com/gabrielmuteki" },
  { name: "GitHub (EPSIE)", icon: "fa-brands fa-github", url: "https://github.com/epsiestartup" },
  { name: "GitLab", icon: "fa-brands fa-gitlab", url: "https://gitlab.com/gabrielmuteki" },
  { name: "GitLab (ISTIC)", icon: "fa-brands fa-gitlab", url: "https://gitlab2.istic.univ-rennes1.fr/ekesse" },
  { name: "EPSIE", icon: "fa-solid fa-globe", url: "https://epsie-startup.com" },
];

const CONTACT_INFO = {
  email: "kessegabriel@gmail.com",
  phone: "+33 6 89 39 57 26",
  phoneHref: "tel:+33689395726",
};
