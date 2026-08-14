import joyeria from '@/img/joyeria.png';
import space from '@/img/space-game.png';
import creative from '@/img/creative-za.png';
import rousse_queen from '@/img/rousse-queen.png';

export const data = {
    projects: [
        {
            title: "Juego de Joyería / Joyería App",
            category: "Web & PWA (Progressive Web App)",
            description: "App de joyería de alto rendimiento desarrollada en React y Node.js. Implementa capacidades PWA para uso offline, desplegada bajo Nginx en infraestructura Hetzner con enfoque en seguridad y escalabilidad.",
            image: joyeria,
            gradient: "from-purple-500/20 to-pink-500/20",
            tech: ["React", "Node.js (express)", "MongoDB", "Nginx"],
            metrics: { principal: "99.9% Uptime", secundaria: "SSL Secure", extra: "PWA Optimized" },
            url: 'https://demo-jewerly.crissdev9.com/jewerly/home',
            color: "gray-500"
        },
        {
            title: "Space gamer",
            category: "Web App (MERN) + IA",
            description: "Plataforma gaming con carrusel interactivo 'Drag & Drop' e integración de IA. Cuenta con un asistente personalizado basado en LLMs para ofrecer soporte exclusivo dentro del sitio.",
            image: space,
            gradient: "from-blue-500/20 to-cyan-500/20",
            tech: ["React", "Node.js (express)", "MongoDB", "Nginx"],
            metrics: { principal: "AI Integration", secundaria: "Drag & Drop UI", extra: "Dynamic Media" },
            url: 'https://spacegame.crissdev9.com/ultra-games/home',
            color: "white"
        },
        {
            title: "Creative ZA",
            category: "Web App (MERN)",
            description: "Sistema de gestión para consultorios que automatiza la facturación y el control financiero. Transforma registros de pagos e ingresos en estadísticas visuales para una toma de decisiones inteligente.",
            image: creative,
            gradient: "from-green-500/20 to-emerald-500/20",
            tech: ["React", "Node.js (express)", "MongoDB", "Nginx"],
            metrics: { principal: "Gestión de Facturación", secundaria: "Control Financiero" },
            url: 'https://demo-creative-za.crissdev9.com/creative-za/home',
            color: "white"
        },
        {
            title: "Rousse Queen",
            category: "Web App (MERN)",
            description: "Sistema especializado en flujos de ventas rápidas, integrando validación estricta de reglas de negocio para combos y generación de reportes financieros por ciclos semanales.",
            image: rousse_queen,
            gradient: "from-rose-500/20 to-red-500/20",
            tech: ["React", "Node.js (express)", "MongoDB", "Nginx"],
            metrics: { principal: "Gestión de órdenes", secundaria: "Análisis de Ciclo" },
            url: 'https://rousse-queen-demo.crissdev9.com/app-rousse-queen/home',
            color: "white"
        },
    ]
}
