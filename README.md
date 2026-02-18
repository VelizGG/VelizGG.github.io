# Data GCP Insight Folio — Portfolio Profesional

> 🌐 **Live Site:** <a href="https://velizgg.github.io">velizgg.github.io</a> | **Source App:** <a href="https://data-gcp-insight-folio.vercel.app">data-gcp-insight-folio</a>

Portfolio profesional de **Data Engineer / BI Analyst** construido con React, TypeScript, Tailwind CSS y Framer Motion, inspirado en la paleta de colores de Google Cloud Platform.

---

## 📋 Tabla de Contenidos

- <a>Descripción del Proyecto</a>
- <a>Tecnologías Utilizadas</a>
- <a>Estructura del Proyecto</a>
- <a>Cómo Ejecutar Localmente</a>
- <a>Secciones del Portfolio</a>
  - <a>About Section</a>
  - <a>Experience Timeline</a>
- <a>Personalización</a>
- <a>Responsive Design</a>
- <a>Animaciones</a>
- <a>Paleta de Colores</a>
- <a>SEO y Accesibilidad</a>
- <a>Deploy</a>
- <a>Licencia</a>

---

## 🎯 Descripción del Proyecto

Este repositorio contiene el portfolio profesional desplegado en GitHub Pages. El proyecto original se desarrolló en <a href="https://github.com/VelizGG/data-gcp-insight-folio">data-gcp-insight-folio</a> y está construido como una aplicación React moderna con múltiples secciones interactivas.

### Características Principales

- ✅ Hero Section con animaciones
- ✅ About Me con foto profesional, estadísticas, certificaciones y logros
- ✅ Experience Timeline con logros cuantificables y métricas
- ✅ Skills Section con categorías y niveles
- ✅ Projects Section con galería
- ✅ Contact Section con formulario
- ✅ Internacionalización (i18n)
- ✅ Modo responsivo completo
- ✅ Optimización SEO
- ✅ Mejoras de accesibilidad

---

## 🛠 Tecnologías Utilizadas

| Tecnología | Uso |
|---|---|
| **Vite** | Build tool y dev server |
| **React 18** | Librería de UI |
| **TypeScript** | Tipado estático |
| **Tailwind CSS 3** | Framework de estilos utilitarios |
| **shadcn/ui** | Componentes UI (Radix UI) |
| **Framer Motion** | Animaciones |
| **React Router DOM** | Ruteo SPA |
| **Lucide React** | Iconos |
| **React Hook Form + Zod** | Formularios y validación |
| **Recharts** | Gráficos |
| **EmailJS** | Envío de emails desde el frontend |
| **Vercel Analytics** | Analítica web |

### Dependencias Principales

```json
{
  "react": "^18.3.1",
  "typescript": "^5.5.3",
  "vite": "^7.1.12",
  "tailwindcss": "^3.4.17",
  "framer-motion": "^12.7.4",
  "lucide-react": "^0.462.0",
  "react-router-dom": "^6.26.2",
  "react-helmet-async": "^2.0.5"
}
```

---

## 📁 Estructura del Proyecto

```
data-gcp-insight-folio/
├── public/
│   ├── gabriel_veliz.jpg          # Foto profesional
│   └── assets/
│       └── certifications/        # Logos de certificaciones
│           ├── gcp-data-engineer.png
│           ├── gcp-architect.png
│           ├── looker.png
│           └── google-analytics.png
├── src/
│   ├── components/
│   │   ├── about/
│   │   │   ├── AboutData.ts       # Interfaces y datos del About
│   │   │   ├── AboutStats.tsx     # Componente de estadísticas
│   │   │   ├── CertificationCard.tsx  # Tarjeta de certificación
│   │   │   └── AboutSection.tsx   # Sección principal
│   │   ├── experience/
│   │   │   ├── ExperienceData.ts  # Interfaces TypeScript y datos
│   │   │   ├── ExperienceCard.tsx # Componente de tarjeta individual
│   │   │   └── ExperienceSection.tsx  # Sección principal con stats
│   │   ├── hero/
│   │   │   └── HeroSection.tsx
│   │   ├── skills/
│   │   │   └── SkillsSection.tsx
│   │   ├── projects/
│   │   │   └── ProjectsSection.tsx
│   │   └── ui/                    # Componentes shadcn/ui
│   ├── pages/
│   │   └── Index.tsx
│   └── App.tsx
├── styles/
│   └── variables.css              # Variables CSS / Paleta de colores
├── index.html
├── package.json
├── tailwind.config.ts
├── vite.config.ts
└── tsconfig.json
```

---

## 🚀 Cómo Ejecutar Localmente

**Requisito:** Node.js y npm instalados — <a href="https://github.com/nvm-sh/nvm#installing-and-updating">instalar con nvm</a>

```sh
# Paso 1: Clonar el repositorio
git clone https://github.com/VelizGG/data-gcp-insight-folio.git

# Paso 2: Navegar al directorio del proyecto
cd data-gcp-insight-folio

# Paso 3: Instalar dependencias
npm i

# Paso 4: Iniciar el servidor de desarrollo
npm run dev
```

### Scripts Disponibles

| Comando | Descripción |
|---|---|
| `npm run dev` | Servidor de desarrollo con hot reload |
| `npm run build` | Build de producción |
| `npm run build:dev` | Build en modo desarrollo |
| `npm run lint` | Ejecutar ESLint |
| `npm run preview` | Preview del build de producción |

---

## 📑 Secciones del Portfolio

### 1. About Section

**Layout Profesional Multi-sección con:**

- Header con badge y título
- Foto profesional con efectos hover
- Descripción expandida (3 párrafos)
- Información de contacto
- Tags de expertise
- Botón "Download Resume"
- Estadísticas clave (4 métricas)
- Certificaciones profesionales (grid)
- Logros destacados

#### Estructura del Layout

```
┌─────────────────────────────────────────┐
│           [Badge] About Me              │
│        Get to Know Me Better            │
│              Subtitle                   │
├─────────────────────────────────────────┤
│  ┌─────────────┐   ┌─────────────────┐ │
│  │             │   │  Name & Title   │ │
│  │   Photo     │   │  Contact Info   │ │
│  │             │   │  Description    │ │
│  │             │   │  Expertise      │ │
│  └─────────────┘   │  [Resume CTA]   │ │
│                     └─────────────────┘ │
├─────────────────────────────────────────┤
│  [Stat] [Stat] [Stat] [Stat]           │
├─────────────────────────────────────────┤
│    Professional Credentials             │
│  [Cert] [Cert] [Cert]                   │
│  [Cert] [Cert] [Cert]                   │
├─────────────────────────────────────────┤
│         Key Achievements                │
│  [Achievement] [Achievement]            │
│  [Achievement] [Achievement]            │
└─────────────────────────────────────────┘
```

#### Estadísticas por defecto

- **Years Experience:** 5+
- **Projects Completed:** 20+
- **Technologies:** 30+
- **Data Processed:** 500M+

#### Componente CertificationCard

Elementos incluidos:
- Logo de la certificación (con fallback)
- Badge de fecha
- Nombre completo
- Emisor (Google Cloud, etc.)
- Skills/tecnologías relacionadas
- Enlace a credencial
- ID de credencial (opcional)
- Efectos hover con glow

---

### 2. Experience Timeline

Sección profesional de experiencia laboral con timeline vertical, logros destacados con métricas y tecnologías utilizadas.

#### Características

- **Timeline vertical** con línea conectora e indicadores visuales
- **Marcador especial** para posición actual
- **Animaciones** de entrada staggered
- **Estadísticas Destacadas:** Total años, posiciones, empresas, tecnologías
- **Logros con Métricas:** Categorizados (Impact, Technical, Leadership, Innovation)

#### Categorías de Logros

| Categoría | Color | Icono | Descripción |
|---|---|---|---|
| **Impact** | Verde | TrendingUp | Impacto en negocio/usuarios |
| **Technical** | Azul | Zap | Logros técnicos/arquitectura |
| **Leadership** | Púrpura | Users | Liderazgo de equipos |
| **Innovation** | Naranja | Award | Innovación/nuevas soluciones |

#### Tipos de Datos

```typescript
interface ExperienceItem {
  id: string;
  period: string;
  title: string;
  company: string;
  location: string;
  locationType?: LocationType;
  employmentType?: EmploymentType;
  description: string[];
  achievements?: Achievement[];
  technologies: string[];
  current?: boolean;
  logo?: string;
}

interface Achievement {
  description: string;
  category: AchievementCategory;
  metric?: string;
}
```

#### Funciones Helper

| Función | Descripción | Ejemplo |
|---|---|---|
| `calculateDuration(period)` | Calcula duración en años y meses | `"1 año 2 meses"` |
| `getTotalExperience()` | Total de años de experiencia | `"4+ años"` |
| `getAllTechnologies()` | Todas las tecnologías únicas | `["BigQuery", "Docker", ...]` |
| `getCurrentPosition()` | Posición actual | `{ company: "...", ... }` |
| `getExperienceStats()` | Estadísticas generales | `{ totalYears, totalPositions, ... }` |

---

## 🎨 Personalización

### Actualizar datos personales

Edita `src/components/about/AboutData.ts`:

```typescript
export const aboutData: AboutData = {
  name: 'Tu Nombre',
  title: 'Tu Título Profesional',
  location: 'Tu Ciudad, País',
  email: 'tu@email.com',
  phone: '+XX XXX XXX XXXX',
  image: '/tu-foto.jpg',
  description: [
    'Primer párrafo sobre ti...',
    'Segundo párrafo...',
    'Tercer párrafo...',
  ],
  expertise: ['Skill 1', 'Skill 2'],
};
```

### Agregar una estadística

```typescript
export const stats: Stat[] = [
  {
    id: 'mi-stat',
    label: 'Mi Métrica',
    value: '100+',
    icon: 'target',
    description: 'Descripción opcional',
  },
];
```

### Agregar una certificación

```typescript
export const certifications: Certification[] = [
  {
    id: 'mi-cert',
    name: 'Nombre de la Certificación',
    issuer: 'Emisor (Google Cloud, AWS, etc.)',
    date: '2024',
    credentialUrl: 'https://credential-url.com',
    logo: '/assets/certifications/mi-cert.png',
    credentialId: 'ABC123XYZ',
    skills: ['Skill 1', 'Skill 2', 'Skill 3'],
  },
];
```

### Agregar experiencia laboral

Edita `src/components/experience/ExperienceData.ts`:

```typescript
export const experienceData: ExperienceItem[] = [
  {
    id: "nueva-empresa",
    period: "Ene 2024 - Presente",
    title: "Senior Data Engineer",
    company: "Tech Corp",
    location: "Ciudad de México",
    locationType: "remote",
    employmentType: "full-time",
    current: true,
    description: [
      "Desarrollé arquitectura de datos en GCP",
      "Lideré equipo de 5 ingenieros de datos"
    ],
    achievements: [
      {
        description: "Reduje costos de infraestructura en 50%",
        category: "impact",
        metric: "50% reducción"
      }
    ],
    technologies: ["GCP", "BigQuery", "Python", "Terraform"]
  },
];
```

### Integración en App Principal

```tsx
import HeroSection from '@/components/hero/HeroSection';
import AboutSection from '@/components/about/AboutSection';
import SkillsSection from '@/components/skills/SkillsSection';
import ExperienceSection from '@/components/experience/ExperienceSection';
import ProjectsSection from '@/components/projects/ProjectsSection';

function App() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ExperienceSection />
      <ProjectsSection />
    </>
  );
}
```

---

## 📱 Responsive Design

### Breakpoints

| Breakpoint | Stats | Certificaciones | Logros | Layout Principal |
|---|---|---|---|---|
| **Mobile** (&lt; 640px) | 2 columnas | 1 columna | 1 columna | Stack vertical |
| **Tablet** (640px - 1024px) | 4 columnas | 2 columnas | 2 columnas | Stack vertical |
| **Desktop** (&gt; 1024px) | 4 columnas | 3 columnas | 2 columnas | 2 columnas (lado a lado) |

### Experience Timeline

| Breakpoint | Layout | Features |
|---|---|---|
| **Mobile** (&lt; 640px) | Single column timeline | Stats 2x2, achievements stack |
| **Tablet** (640px - 1024px) | Timeline + 2-col achievements | Stats 4x1 |
| **Desktop** (&gt; 1024px) | Full timeline + 2-col achievements | All features visible |

---

## 🎭 Animaciones

### Entrada de Sección

```typescript
staggerChildren: 0.15
duration: 0.6s
easing: [0.22, 1, 0.36, 1] // ease-out-expo
```

### Estadísticas

```typescript
staggerChildren: 0.1
opacity: 0 → 1
y: 20 → 0
```

### Certificaciones

```typescript
delay: index * 0.1
opacity: 0 → 1
y: 30 → 0
```

### Timeline Cards

- **Entrada:** Slide from left con fade
- **Delay:** Stagger de 0.15s entre cards
- **Trigger:** Viewport con `once: true`

### Hover Effects

| Elemento | Efecto |
|---|---|
| Stats cards | `translateY(-4px)`, shadow glow |
| Cert cards | `translateY(-4px)`, shadow glow |
| Foto | `scale(1.05)`, shadow increase |
| Expertise tags | background opacity increase |
| Achievement badges | `scale(1.05)` |
| Technology badges | cambio de color accent |

---

## 🎨 Paleta de Colores

Paleta inspirada en Google Cloud Platform, definida en `variables.css`:

```css
--color-primary: #4285F4      /* Google Cloud Blue */
--color-secondary: #00BFA5    /* Teal */
--color-accent: #2979FF       /* Electric Blue */
--gradient-tech               /* Degradado multicolor */
--gradient-cta                /* Degradado para botones */
--gradient-hero               /* Degradado para fondos */
```

---

## 🌐 SEO y Accesibilidad

### SEO

- Meta tags optimizados con `react-helmet-async`
- Open Graph tags para redes sociales
- Structured data para portfolio profesional

### Accesibilidad

- Contraste de colores adecuado
- `aria-labels` en elementos interactivos
- Navegación por teclado
- Soporte para lectores de pantalla

### Internacionalización

Preparado para i18n con `useLanguage()`:

```typescript
const { t } = useLanguage();

<h2>{t('about.title')}</h2>
<p>{t('about.subtitle')}</p>
```

---

## 🚀 Deploy

### GitHub Pages (este repositorio)

El build estático se despliega en **GitHub Pages** automáticamente.

### Vercel (repositorio fuente)

El repositorio fuente <a href="https://github.com/VelizGG/data-gcp-insight-folio">data-gcp-insight-folio</a> está desplegado en <a href="https://data-gcp-insight-folio.vercel.app">Vercel</a>.

### Editar en GitHub

- Navega al archivo deseado
- Haz clic en el botón "Edit" (ícono de lápiz)
- Realiza tus cambios y haz commit

### Usar GitHub Codespaces

- Navega a la página principal del repositorio
- Haz clic en "Code" (botón verde)
- Selecciona la pestaña "Codespaces"
- Haz clic en "New codespace"

---

## ✅ Checklist de Implementación

- [ ] Actualizar foto profesional en `/public/gabriel_veliz.jpg`
- [ ] Actualizar datos personales en `AboutData.ts`
- [ ] Agregar logos de certificaciones en `/public/assets/certifications/`
- [ ] Actualizar estadísticas según tu experiencia
- [ ] Personalizar certificaciones reales
- [ ] Actualizar logros/achievements
- [ ] Agregar archivo `resume.pdf` en `/public/`
- [ ] Verificar enlaces de credenciales
- [ ] Testear responsive en móvil
- [ ] Agregar traducciones i18n
- [ ] Verificar accesibilidad (contraste, aria-labels)

---

## 🔧 Dependencias

```json
{
  "framer-motion": "^12.7.4",
  "lucide-react": "^0.462.0",
  "@radix-ui/react-*": "shadcn/ui components",
  "react-helmet-async": "^2.0.5",
  "react-router-dom": "^6.26.2",
  "recharts": "^2.12.7",
  "tailwindcss": "^3.4.17",
  "emailjs-com": "^3.2.0"
}
```

---

## 🎯 Mejores Prácticas

### Foto Profesional
- Fondo neutral o corporativo
- Vestimenta profesional
- Buena iluminación
- Tamaño: 800x800px (cuadrado), &lt; 150KB

### Descripción
- Máximo 3 párrafos, claro y conciso
- Enfoque en valor y logros
- Incluye keywords de tu industria

### Estadísticas
- Datos reales y verificables
- Redondea números para impacto
- Usa métricas relevantes para tu rol

### Certificaciones
- Solo certificaciones vigentes
- Prioriza las más relevantes
- Mantén enlaces actualizados

### Métricas de Experiencia

```typescript
// ✅ BIEN - Específico y medible
metric: "40% reducción costos"
metric: "10M+ registros/día"

// ❌ MAL - Vago o genérico
metric: "Mucho impacto"
metric: "Mejora significativa"
```

---

## 📝 Notas

- Los datos en `AboutData.ts` y `ExperienceData.ts` son de ejemplo — personaliza según tu perfil real
- Mantén certificaciones actualizadas
- Todas las animaciones usan `viewport: { once: true }` para mejor performance
- Compatible con sistema de traducciones (LanguageContext)
- Achievement icons se importan de `lucide-react`

---

## 📄 Licencia

Este proyecto está bajo la licencia <a>MIT</a>.

---

**Creado para:** Portfolio profesional de Data Engineer / BI Analyst  
**Stack:** React + TypeScript + Tailwind CSS + Framer Motion  
**Paleta:** Google Cloud Platform inspired  
**Repositorio fuente:** <a href="https://github.com/VelizGG/data-gcp-insight-folio">VelizGG/data-gcp-insight-folio</a>

---

## Implementation Details

The current `README.md` at `VelizGG/VelizGG.github.io` (BlobSha: `cec8f16b681a43e2e484d597639ba5878f43b1d0`) contains only `# VelizGG.github.io`. Replace the entire content of this file with the full documentation above. The file is on the `main` branch.