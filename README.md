# 🌐 Portfolio Professionnel — Régis KESSÉ

> **Ingénieur Informatique · Spécialiste IA, LLM & RAG · Vision par Ordinateur · Développeur Full-Stack**

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![i18n](https://img.shields.io/badge/i18n-FR%20%7C%20EN-blue?style=for-the-badge)
![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)

---

## 📌 Présentation du Projet (Pour les Visiteurs)

Bienvenue sur le dépôt du portfolio personnel de **Régis KESSÉ**, diplômé de l'**ESIR** (École Supérieure d'Ingénieurs de Rennes) et de l'**ESI INP-HB**.

Ce site vitrine interactif et moderne présente mon parcours, mes compétences techniques en Intelligence Artificielle et génie logiciel, mes certifications, ainsi que mes différents projets (RAG local, systèmes multi-agents, vision par ordinateur, applications full-stack).

### 🌟 Points Forts & Architecture

- **Architecture Zero-Build** : Conçu en Web Vanilla (HTML5, CSS3, ES6 JavaScript). Aucun `npm install`, aucune étape de compilation ni d'outils de bundling requis.
- **Bilingue Dynamique (FR / EN)** : Bascule instantanée entre le Français et l'Anglais avec conservation du choix utilisateur via `localStorage`.
- **Thème Sombre / Clair** : Basculement fluide de thème avec sauvegarde de la préférence.
- **UX/UI Modèle Premium** : Effets de fond animés (particules), animations au scroll (AOS, GSAP + ScrollTrigger), rôles écrits dynamiquement (Typed.js), compteurs chiffrés animés (CountUp.js).
- **Filtres de Projets & Modales** : Découverte interactive des projets par catégorie avec fenêtres modales détaillées.
- **Gestion d'Images Avancée** : Système de fallback avec placeholders vectoriels automatiques lorsqu'une image n'est pas encore disponible.
- **Ultra Performant & Responsive** : Optimisé pour une navigation fluide sur mobile, tablette et écran 4K.

### 🛠️ Stack Technique & Librairies (via CDN)

| Élément | Technologie / Librairie | Description |
| :--- | :--- | :--- |
| **Structure & Style** | HTML5 / CSS3 Vanilla | CSS moderne avec Custom Properties (Design Tokens), Flexbox & Grid |
| **Logique & Dynamisme** | JavaScript ES6+ | Rendu dynamique i18n et gestion des états sans framework lourd |
| **Icônes** | [Font Awesome 6](https://fontawesome.com/) | Ensemble d'icônes vectorielles |
| **Animations Scroll** | [AOS](https://michalsnik.github.io/aos/) | Apparition progressive des éléments au défilement |
| **Effets Complexe & Parallax** | [GSAP + ScrollTrigger](https://gsap.com/) | Animations de timelines et effets visuels avancés |
| **Particules Hero** | [tsParticles](https://particles.js.org/) | Arrière-plan dynamique et interactif dans l'en-tête |
| **Saisie Automatique** | [Typed.js](https://github.com/mattboldt/typed.js/) | Effet "machine à écrire" sur les rôles et spécialités |
| **Compteurs Animés** | [CountUp.js](https://inorganik.github.io/countUp.js/) | Animation des statistiques et chiffres clés |

---

## 🛠️ Guide du Développeur (Pour Régis)

Ce guide résume toutes les étapes nécessaires pour administrer, mettre à jour, tester et déployer le portfolio sans toucher au code complexe.

### 📂 Structure des Fichiers

```text
portfolio/
├── index.html              # Page unique (structure globale, imports CDN, meta SEO)
├── README.md               # Documentation & guide de maintenance
├── css/
│   └── style.css           # Design tokens (couleurs, thèmes), layout & animations CSS
├── js/
│   ├── content.js          # CENTRALISATION DE TOUS LES TEXTES (FR & EN) + Réseaux sociaux
│   └── main.js             # Moteur principal : rendu i18n, gestion du thème, filtres & modales
├── data/
│   └── images.js           # Manifeste de gestion des images (locales/URL) & placeholders
└── assets/
    ├── cv/
    │   └── CV_Regis_KESSE.pdf # Fichier CV téléchargé par les visiteurs
    └── images/             # Vos photos de profil, projets, diplômes & certifications
```

---

### 1️⃣ Modifier les Textes & Données (`js/content.js`)

**Tout le contenu textuel du site est centralisé dans `js/content.js`.** Vous n'avez **jamais** besoin d'éditer le fichier `index.html` pour changer une phrase ou ajouter une expérience.

Le fichier contient la structure suivante :
```js
const CONTENT = {
  fr: { /* Textes en français */ },
  en: { /* Textes en anglais */ }
};
```

#### 🔄 Règle d'or i18n
Chaque modification apportée dans la section `fr` doit avoir son équivalent dans la section `en` (mêmes clés, mêmes `id`).

#### ➕ Ajouter un Projet
1. Ouvrez [`js/content.js`](file:///c:/inetpub/wwwroot/portfolio/js/content.js).
2. Dans `CONTENT.fr.projects.items` et `CONTENT.en.projects.items`, ajoutez une nouvelle entrée avec les **mêmes IDs** et **mêmes catégories** :
```js
{
  id: "mon-nouveau-projet",
  category: "ia", // Categories : 'all', 'ia', 'fullstack', 'data'
  title: "Titre du projet",
  shortDesc: "Courte description pour la carte",
  fullDesc: "Description détaillée affichée dans la modale...",
  tags: ["Python", "PyTorch", "FastAPI"],
  image: "project_mon_projet", // ID déclaré dans data/images.js
  demoUrl: "https://demo.example.com", // Optionnel (laisser "" si inexistant)
  githubUrl: "https://github.com/votre-repo", // Optionnel
}
```

#### ➕ Ajouter une Expérience ou Formation
Ajoutez simplement un objet dans le tableau correspondant (`experiences.items` ou `education.items`) dans [`js/content.js`](file:///c:/inetpub/wwwroot/portfolio/js/content.js).

#### 🔗 Modifier les Réseaux Sociaux
En bas de [`js/content.js`](file:///c:/inetpub/wwwroot/portfolio/js/content.js), modifiez le tableau `SOCIALS`. Si un champ `url` est vide (`""`), le bouton social correspondant n'apparaîtra pas sur le site.

---

### 2️⃣ Gérer les Images & Photos (`data/images.js`)

Le site intègre un système d'images avec **placeholders automatiques**. Tant qu'une image n'est pas disponible, le site affiche un dégradé élégant avec une icône adaptée.

Toutes les images sont déclarées dans [`data/images.js`](file:///c:/inetpub/wwwroot/portfolio/data/images.js) :

```js
project_rag_assistant: {
  description: "Capture d'écran de l'assistant RAG",
  used_in: "Section Projets",
  recommended_size: "1280x800px",
  type: "local", // 'local' ou 'url'
  src: "assets/images/projects/rag.png",
  available: true // ⚠️ IMPORTANT : Mettre à true pour afficher l'image réelle
}
```

#### Étapes pour ajouter/remplacer une image :
1. Placez votre image dans le dossier `assets/images/` (ex: `assets/images/projects/mon-projet.png`).
2. Ouvrez [`data/images.js`](file:///c:/inetpub/wwwroot/portfolio/data/images.js).
3. Indiquez le chemin dans `src` (ex: `"assets/images/projects/mon-projet.png"`).
4. **Passez `available: true`**. *(Si `available` reste à `false`, le placeholder généré s'affichera même si le fichier existe).*

> 💡 **Images distantes** : Si l'image est hébergée sur le web (ex: CDN, GitHub, Imgur), mettez `type: "url"`, collez l'URL complète dans `src` et mettez `available: true`.

---

### 3️⃣ Tester le Site en Local

Puisqu'il n'y a pas d'étape de compilation, vous pouvez tester le site de deux manières :

#### Option A : Ouverture directe
- Double-cliquez simplement sur `index.html` pour l'ouvrir dans votre navigateur web.

#### Option B : Serveur local léger (Recommandé)
Pour un rendu identique à la production :
```bash
# Avec Python (intégré nativement sur la plupart des systèmes)
python -m http.server 8080

# Ou avec Node.js
npx serve .
```
Accédez ensuite à [http://localhost:8080](http://localhost:8080) dans votre navigateur.

---

### 4️⃣ Personnalisation du Design & du CV

- **Couleurs de marque** : Modifiez les variables CSS `--accent-1`, `--accent-2` et `--accent-3` en haut de [`css/style.css`](file:///c:/inetpub/wwwroot/portfolio/css/style.css).
- **Thème par défaut** : Dans [`index.html`](file:///c:/inetpub/wwwroot/portfolio/index.html), modifiez la balise `<html lang="fr" data-theme="dark">` en `data-theme="light"` si vous préférez le mode clair par défaut.
- **Mise à jour du CV** : Remplacez le fichier [`assets/cv/CV_Regis_KESSE.pdf`](file:///c:/inetpub/wwwroot/portfolio/assets/cv/CV_Regis_KESSE.pdf) par votre nouveau CV (gardez le même nom de fichier).

---

### 5️⃣ Déploiement sur GitHub Pages

1. Créez un dépôt sur GitHub (ex: `gabrielmuteki.github.io` ou `portfolio`).
2. Poussez l'intégralité du dossier à la racine de votre dépôt.
3. Dans **Settings** -> **Pages** du dépôt :
   - Source : **Deploy from a branch**
   - Branch : `main` / Folder : `/ (root)`
4. Cliquez sur **Save**. Le site est 100% statique et sera en ligne en quelques secondes !

