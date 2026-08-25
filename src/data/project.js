// Exporta o array de projetos
export const projects = [
    {
        slug: "portal-de-viagens",
        title: "Site de viagens",
        description: "Um portal simples e moderno para visualização de destinos turísticos, construído com as tecnologias mais recentes do ecossistema React, incluindo Next.js e TypeScript. O projeto foi desenvolvido com o intuito prático para demonstrar a criação de um site com múltiplas páginas, rotas dinâmicas, componentes reutilizáveis e estilização moderna.",
        technologies: ["React", "CSS Modules", "Typescript", "Next.js"],
        image: "/siteviagens.webp",
        repo: "https://github.com/BigodeMarine/site-de-viagens",
    },

    {
        slug: "meu-blog-cinema",
        title: "Meu blog de cinema",
        description: "Blog de cinema simples, desenvolvido com Next.js (App Router) e TypeScript, que carrega artigos de um arquivo JSON local, possui rotas dinâmicas e boas práticas de SEO.",
        technologies: ["React", "CSS Global", "Typescript", "Next.js"],
        image: "/blog.webp",
        repo: "https://github.com/BigodeMarine/meu-blog-cinema",
    },

    {
        slug: "pipeline-ci-cd",
        title: "Pipeline de CI e CD",
        description: "Este projeto tem como objetivo demonstrar o uso de CI/CD com GitHub Actions em uma aplicação desenvolvida com Next.js. Inclui testes automatizados, análise de código com ESLint e execução de build contínua a cada novo push ou pull request para a branch main.",
        technologies: ["React", "CSS modules", "Vitest", "Next.js", "Testing Library", "ESLint", "Node.js"],
        image: "/Rpg.webp",
        repo: "https://github.com/BigodeMarine/pipeline-ci-cd",
    },

    {
        slug: "pokemon-api",
        title: "Pokémon API",
        description: "API REST para gerenciamento de Pokémon desenvolvida com FastAPI, integrada à PokeAPI, PostgreSQL e Redis. O projeto também possui suporte a Docker, Docker Compose, Kubernetes, GitHub Actions, GitHub Container Registry (GHCR) e monitoramento de logs utilizando a stack ELK (Elasticsearch, Logstash e Kibana).",
        technologies: ["Python", "FastAPI", "Uvicorn", "Pydantic", "SQLAlchemy", "PostgreSQL", "Psycopg", "Alembic", "Redis", "HTTPX", "Docker", "Docker Compose", "Kubernetes", "Pytest", "GHCR", "Elasticsearch", "Logstash", "Kibana"],
        image: "/pokemon-project.webp",
        repo: "https://github.com/BigodeMarine/Pokemon-API",
    }

];
