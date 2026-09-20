# Minimal Fully-Free Learning Plan
## Executive conclusion

It is a long-horizon plan to become a **software-and-systems engineer who grows into Cloud/DevOps/SRE/Platform Engineering**, uses a relevant European bachelor’s degree and European production experience as a bridge to Japan, and later pursues Japanese employment and a Highly Skilled Professional (HSP) / permanent-residence strategy.

The guide’s technical sequence is sound:

> **Computer science foundations → Linux and Git → Python and automation → networking → SQL/PostgreSQL and backend → Docker → AWS/cloud → Terraform → CI/CD → observability and security → Kubernetes → production ownership → later AI-systems integration.**

Its best learning rule is also correct:

> **One primary resource, one reference, one project, and one test per skill.**

The smallest high-coverage resource stack is therefore not another giant list. It is a compact set of **actual courses, official documentation, and project-based practice**, with the supplied GitHub collections used only as indexes. No free resource can provide literal 100% coverage of real engineering ability because production incidents, human feedback, interviews, university assessment, paid cloud consumption, and workplace communication remain external requirements. The stack below is designed to cover the guide’s defined knowledge and practice outcomes with minimal duplication.

## 1. What I analysed

The archive contains **17 Markdown files** under `Guide/`, totaling **100,128 bytes and 6,630 lines**. The files include the index, master career plan, IT roadmap, current phase, Europe university and career strategies, Japan transition and HSP/PR strategies, English and Japanese plans, money/freelance plan, tracking system, decision rules, a 2026–2036 timeline, and the larger `Road-Map.md` and `Skills-Earning.md` documents.

Every extracted Markdown file was read in full. The archive was extracted to a working directory and SHA-256 checksums were generated for all files. The guide repeatedly emphasizes Linux, Python, Git, networking, backend, Docker, AWS, Terraform, CI/CD, security, Kubernetes, English, Japanese, university selection, internships, production experience, and evidence tracking.

The guide is strongest in four areas. First, it establishes a sensible dependency order. Second, it explicitly delays Kubernetes and AI until the foundations exist. Third, it treats projects, debugging, explanation, and production experience as more valuable than passive course completion. Fourth, it correctly treats freelancing as optional income and evidence rather than as a replacement for the European professional-experience target.

The guide has three important limits. It contains some aggressive age and immigration assumptions that must be revalidated against current official rules. It sometimes names technologies before the user has completed the prerequisite stage. It also includes broad resource-collection impulses that conflict with its own anti-hoarding rule. This report resolves those conflicts in favor of the canonical sequence and capability gates.

## 2. Definition of “fully free and accessible”

A resource is marked **fully free** only when the learning material needed for the recommended use is available without a subscription, paid trial, institutional enrollment, or payment for the learning content. A free certificate is not required for a resource to qualify. A resource is marked **reference** when it is official documentation rather than a structured course. A resource is marked **index** when it mainly links to other resources and should not be treated as the learner’s curriculum.

The following distinctions matter:

| Label | Meaning | Recommendation status |
|---|---|---|
| **Fully free** | Core lessons, documentation, exercises, or source material are accessible without payment. | Suitable for the core stack. |
| **Free core; paid optional credential** | Learning is free, but a verified certificate, exam, or accreditation may cost money. | Suitable only if the credential is not required. |
| **Free index** | The repository is freely accessible but mostly points elsewhere. | Use for discovery, not as a primary course. |
| **Free software; non-free infrastructure possible** | The software and documentation are free, but hosting, cloud, domains, or usage may cost money. | Use locally first; budget external use. |
| **Not fully free** | Important lessons, feedback, stages, or access are paywalled, limited, or trial-based. | Do not count as a core dependency. |

## 3. The minimal core stack

The table below is the recommended spine. It intentionally contains fewer resources than the supplied repositories because each item has a distinct job.

| Order | Resource | Role | Guide coverage | Status and limit |
|---:|---|---|---|---|
| 1 | [CS50x](https://cs50.harvard.edu/x/) | Primary computer-science course | Computational thinking, C, memory, algorithms, data structures, Python, SQL, HTML/CSS/JavaScript, Flask, final project | **Fully free** through OpenCourseWare. A verified certificate, transfer credit, or accreditation is optional and may involve payment or separate enrollment. |
| 2 | [MIT The Missing Semester](https://missing.csail.mit.edu/) | Tools and workflow course | Shell, command line, Git, development tools, debugging, profiling, packaging, code quality | **Fully free.** It complements rather than replaces Linux administration or networking study. |
| 3 | [Python Tutorial and Standard Library documentation](https://docs.python.org/3/tutorial/) | Language reference | Syntax, data structures, modules, files, JSON, exceptions, classes, CLI arguments, virtual environments, logging, standard library | **Fully free and official.** It expects some programming understanding and is not a complete project curriculum. |
| 4 | [MDN Learn Web Development](https://developer.mozilla.org/en-US/docs/Learn_web_development) and [JavaScript Guide](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide) | Web fundamentals reference/course | HTML, CSS, JavaScript, DOM, browser APIs, fetch, HTTP-facing web concepts | **Fully free.** Use only to understand web applications; do not turn this into a frontend specialization. |
| 5 | [PostgreSQL Tutorial](https://www.postgresql.org/docs/current/tutorial.html) and the [SQL language documentation](https://www.postgresql.org/docs/current/sql.html) | Database reference and practice | Relational concepts, SQL, tables, joins, aggregation, constraints, indexes, transactions, application development | **Fully free.** The tutorial is introductory; deeper query planning and operations require continued use of the full documentation. |
| 6 | [FastAPI documentation](https://fastapi.tiangolo.com/) | Backend framework reference | HTTP APIs, validation, JSON, authentication patterns, error handling, testing, deployment concepts | **Fully free.** It is documentation, not a complete backend degree. Build the project yourself. |
| 7 | [Docker Get Started](https://docs.docker.com/get-started/) | Containerization reference | Images, layers, containers, Dockerfiles, volumes, networks, Compose, logs and health checks | **Fully free.** Running workloads is free locally; remote hosting can cost money. |
| 8 | [AWS learning plans and documentation](https://aws.amazon.com/training/learn-about/) | Cloud concepts and vendor reference | IAM, EC2, VPC, subnets, routes, security groups, S3, RDS, load balancing, CloudWatch, DNS, scaling | **Learning material is free.** Actual AWS resources can incur charges; use local emulators, free tiers, budgets, and deletion discipline. AWS Educate is explicitly presented as free for learners, but product usage is a separate cost question. |
| 9 | [Terraform Tutorials](https://developer.hashicorp.com/terraform/tutorials) | Infrastructure-as-code course/reference | Providers, resources, variables, outputs, state, plan/apply/destroy, modules, dependencies, cloud and Docker examples | **Fully free tutorials.** HCP Terraform accounts and cloud providers may have separate limits or costs. Start with Docker or local providers. |
| 10 | [GitHub Actions documentation](https://docs.github.com/en/actions) | CI/CD reference | Workflows, triggers, jobs, steps, runners, secrets, artifacts, testing, deployment, rollback and supply-chain concepts | **Documentation is free.** GitHub Actions has usage limits and billing rules for some contexts; use public repositories or free allowances and inspect current limits. |
| 11 | [Kubernetes Basics](https://kubernetes.io/docs/tutorials/kubernetes-basics/) and the [official documentation](https://kubernetes.io/docs/home/) | Kubernetes course/reference | Cluster, deployment, service exposure, scaling, updates, debugging, namespaces, storage, probes, resource limits and rollback | **Fully free.** Run Minikube, kind, or another local cluster before paying for a managed cluster. |
| 12 | [OWASP Web Security Testing Guide](https://owasp.org/www-project-web-security-testing-guide/) and [OWASP Top 10](https://owasp.org/www-project-top-ten/) | Application-security foundation | Authentication, authorization, input validation, common web vulnerabilities, testing and security thinking | **Fully free.** It is not a complete security-operations or penetration-testing curriculum. Practice only on systems you own or are explicitly authorized to test. |
| 13 | [Prometheus documentation](https://prometheus.io/docs/introduction/overview/) and [OpenTelemetry documentation](https://opentelemetry.io/docs/) | Observability reference | Metrics, logs, traces, instrumentation, alerting, SLIs/SLOs and operational diagnosis | **Fully free.** The tools are open source; meaningful operational skill still requires deploying, breaking, and repairing services. |
| 14 | [System Design Primer](https://github.com/donnemartin/system-design-primer) | System-design reference and interview practice | Scalability, availability, caching, databases, queues, networking, trade-offs, diagrams and interview-style exercises | **Fully accessible and free.** It is a reference/interview primer, not a replacement for distributed-systems coursework or production experience. |
| 15 | [Tadoku free graded readers](https://tadoku.org/japanese/en/free-books-en/) plus [Irodori](https://www.irodori.jpf.go.jp/en/) | Japanese reading and practical-language material | Graded reading, everyday vocabulary, practical communication and progression toward independent reading | **Free-access resources.** They do not by themselves provide full N2/N1 grammar, speaking feedback, or workplace fluency. |
| 16 | [British Council IELTS preparation](https://takeielts.britishcouncil.org/take-ielts/prepare) | English/IELTS supplement | Test format, practice, listening, reading, writing and speaking guidance | **Free preparation material.** It is a supplement to the user’s existing coaching, not a guarantee of a score. |

The first six items are enough for the user’s current 90-day foundation and first six-month target. Items 7–14 should be delayed until the preceding gates are passed. Items 15–16 are supporting tracks and must not displace the primary technical sequence.

## 4. Coverage matrix against the guide

| Guide stage or learning outcome | Primary resource | Required project or test | Coverage judgment |
|---|---|---|---|
| Computer architecture, memory, processes, algorithms and data structures | CS50x | Explain memory and process behavior; solve and explain selected problem sets | Strong foundation; university-level depth still required later. |
| Shell, filesystems, permissions, processes, logs and Git | Missing Semester plus Linux man pages | Server Toolkit; intentionally break permissions, services and paths, then repair them | Strong practical foundation; add distribution-specific administration as needed. |
| Python syntax, modules, files, JSON/CSV, exceptions and CLI tools | CS50x Python weeks plus Python docs | Python automation CLI with tests and logging | Strong for the guide’s target; advanced concurrency and packaging come later. |
| IPv4, CIDR, DNS, DHCP, ARP, TCP/UDP, routing, NAT and firewalls | Official [Cisco Networking Basics](https://www.netacad.com/courses/networking-basics) or [Cloudflare learning center](https://www.cloudflare.com/learning/) plus hands-on Linux tools | Draw and explain a home/service network; diagnose failures with `ip`, `ss`, `curl`, DNS tools and packet captures | The free documentation is broad, but networking requires experiments. Do not count reading alone as competence. |
| SQL, schema design, keys, joins, constraints, indexes and transactions | PostgreSQL docs | Design a schema, load data, write queries, inspect plans and test transactions | Strong, provided PostgreSQL is run locally and the learner writes queries without copying. |
| HTTP, JSON, cookies, sessions, authentication and REST | MDN plus FastAPI docs | FastAPI/PostgreSQL service with validation, auth, error handling and tests | Strong for applied backend foundations; security must be reinforced with OWASP. |
| Docker images, layers, containers, volumes, networks and Compose | Docker docs | Containerized multi-service application; break networking, volumes and health checks | Strong practical coverage when executed locally. |
| AWS IAM, EC2, VPC, S3, RDS, load balancing and monitoring | AWS learning plans and documentation | Recreate an architecture first with a local diagram and Docker; deploy only a small, budget-controlled version | Conceptual coverage is free; real cloud operations are not guaranteed to be cost-free. |
| Terraform state, modules, plan/apply/destroy and reproducibility | HashiCorp tutorials | Destroy and recreate the same local or low-cost infrastructure from code | Strong for fundamentals; provider-specific production knowledge comes later. |
| CI/CD, tests, artifacts, secrets and deployment | GitHub Actions docs | Push-triggered test/build workflow and a controlled deployment workflow | Strong documentation coverage; operational reliability requires repeated use. |
| Observability, SLI/SLO thinking, logs, metrics and traces | Prometheus and OpenTelemetry docs | Instrument the FastAPI service, create an alert, induce failure, diagnose and write a postmortem | Strong tool coverage; SRE judgment requires real incidents or realistic drills. |
| Security fundamentals | OWASP WSTG and Top 10 | Threat model the project, fix vulnerabilities, rotate secrets and document the result | Good application-security base; not a full cybersecurity career path. |
| Kubernetes objects, deployment, service, ingress, probes, scaling and rollback | Kubernetes Basics and docs | Deploy the same application locally, scale it, break it, inspect it and recover it | Strong for the guide’s first Kubernetes gate; advanced cluster operations come later. |
| Algorithms and data structures | CS50x plus JavaScript Algorithms and Data Structures | Implement selected structures in Python or JavaScript and explain complexity | Good practice support; use a formal algorithms course later if the degree requires it. |
| System design and distributed systems | System Design Primer plus selected Build Your Own X projects | Design a URL shortener, queue-backed service and cache; state trade-offs | Good orientation and interview practice; not equivalent to production design experience. |
| Frontend understanding | MDN and CS50x web weeks | Small HTML/CSS/JS client consuming the FastAPI API | Sufficient for the stated “learn enough, do not specialize” goal. |
| English for study and engineering | Existing IELTS coaching plus British Council practice | Weekly spoken technical explanation and monthly written architecture note | The guide’s integration method is better than adding another large course. |
| Japanese from kana toward N2/N1 | Irodori, Tadoku, [Tae Kim](https://guidetojapanese.org/learn/), Anki and listening | Daily short session, graded reading, listening, timed mock tests and later workplace writing | Good free base; human speaking correction and sustained exposure remain necessary. |
| Portfolio, freelancing and professional communication | Project outputs, GitHub, README and issue-writing practice | Publish documented projects only after independently completing them; sell only reliable small outcomes | No course can substitute for customer communication, delivery, references or market feedback. |

The networking row is intentionally more conservative than the rest of the table. Networking is the largest area where passive online resources routinely create false confidence. The learner should use one coherent introductory course or textbook, then make the Linux service toolkit and packet-level troubleshooting the real curriculum.

## 5. Exact use of the supplied repositories

The supplied repositories are valuable, but they do not have equal educational roles.

| Supplied resource | Classification | Keep? | Correct use |
|---|---|---:|---|
| [the-book-of-secret-knowledge](https://github.com/trimstray/the-book-of-secret-knowledge) | Broad systems, networking, DevOps and security reference index | Yes, later | Use as a lookup shelf after fundamentals. Do not read linearly. |
| [Awesome-Hacking](https://github.com/Hack-with-Github/Awesome-Hacking) | Security and pentesting index | Yes, later and legally | Use to discover safe labs and specialist references. It is not a beginner curriculum. |
| [sindresorhus/awesome](https://github.com/sindresorhus/awesome) | Meta-index of many Awesome lists | No as a daily resource | Use only when a specific gap appears. It has almost no sequencing. |
| [awesome-python](https://github.com/vinta/awesome-python) | Python libraries, frameworks and tools index | Yes, reference only | Consult when a project has a concrete need. Do not browse it before learning core Python. |
| [awesome-selfhosted](https://github.com/awesome-selfhosted/awesome-selfhosted) | Free-software self-hosting catalog | Yes, project inspiration | Select one operational service to deploy after Docker, networking, backups and security basics. |
| [project-based-learning](https://github.com/practical-tutorials/project-based-learning) | Curated project-tutorial index | Yes, project selector | Choose one project matching the current gate. Ignore unrelated language categories. |
| [developer-roadmap / roadmap.sh](https://roadmap.sh/) | Role and skill roadmaps | Yes, navigation only | Use to check omissions, never to replace the personal sequence. |
| [javascript-algorithms](https://github.com/trekhleb/javascript-algorithms) | Implemented algorithms and data structures with explanations | Yes, practice | Use after basic programming; prefer implementing selected structures yourself before reading the solution. |
| [You Don’t Know JS Yet](https://github.com/getify/You-Dont-Know-JS) | Free online JavaScript books | Optional | Use for JavaScript language depth. The books are free online, but the work is copyrighted under a non-commercial, no-derivatives license. |
| [free-programming-books](https://github.com/EbookFoundation/free-programming-books) | Large free-book and course index | Yes, search index only | Search for one missing subject; do not treat the repository size as a syllabus. |
| [30 Seconds of Code](https://github.com/30-seconds/30-seconds-of-code) | Snippet and short-article reference | Optional | Use for syntax refresh after learning; snippets do not develop systems skill. |
| [system-design-primer](https://github.com/donnemartin/system-design-primer) | System-design reference and interview practice | Yes | Use later, after backend, databases and networking. |
| [build-your-own-x](https://github.com/codecrafters-io/build-your-own-x) | Directory of step-by-step “recreate it” tutorials | Yes, selective | Choose one project such as a shell, HTTP server, database, Git, or network stack when the prerequisite skills exist. |
| [GitHub Learn to Code collection](https://github.com/collections/learn-to-code) | GitHub-curated discovery collection | No as a curriculum | It duplicates the index function of the other lists. |
| [freeCodeCamp](https://github.com/freeCodeCamp/freeCodeCamp) | Full free interactive curriculum with projects and certifications | Optional alternative | Use it as a coherent web/backend track if CS50x plus docs feel too abstract. Do not run two full beginner curricula in parallel. |
| [CodeCrafters](https://codecrafters.io/) | Guided real-system reconstruction with tests and feedback | Not core under strict free-only rules | The subject matter is excellent, but the platform is not safely classifiable as fully free for every challenge and feedback stage. Use free Build Your Own X alternatives instead. |

The supplied repositories therefore reduce to four functions: **one navigation index, one project index, one specialist reference shelf, and a few high-value actual learning resources**. Their star counts are not evidence that every linked resource is current, free, complete, or appropriate for this roadmap.

## 6. The project ladder that converts resources into ability

The guide already contains the correct project ladder. The following version makes the gates explicit.

| Gate | Build | Break and repair | Explain before advancing |
|---:|---|---|---|
| 1 | Bash/Python Server Toolkit | Permissions, missing files, stopped services, disk pressure and malformed input | Explain processes, filesystems, logs, exit codes and network state. |
| 2 | Python automation CLI | Bad arguments, missing files, invalid JSON/CSV, API timeouts and test failures | Explain modules, exceptions, virtual environments, logging and tests. |
| 3 | FastAPI + PostgreSQL service | Constraint failures, bad queries, authentication errors and transaction conflicts | Explain HTTP, schema design, joins, indexes, sessions and authorization. |
| 4 | Dockerized multi-service app | Broken networks, volumes, health checks, environment variables and logs | Explain images, layers, containers, Compose and service boundaries. |
| 5 | Controlled cloud deployment | Security-group mistakes, bad routes, failed deployment and cost alarms | Explain IAM, VPC, subnets, routes, storage, database and monitoring. |
| 6 | Terraform-managed infrastructure | State drift, failed plan, dependency changes and destroy/recreate | Explain declarative configuration, state, modules and reproducibility. |
| 7 | GitHub Actions pipeline | Test failure, secret failure, artifact failure and rollback | Explain triggers, jobs, runners, artifacts, secrets and deployment safety. |
| 8 | Observed and secured service | Induced outage, missing metric, expired secret and vulnerable endpoint | Explain metrics, logs, traces, alerts, SLIs/SLOs and incident response. |
| 9 | Local Kubernetes deployment | Probe failure, bad service selector, resource pressure and rollback | Explain Pod, Deployment, Service, Namespace, ConfigMap, Secret, Ingress and scaling. |
| 10 | Integrated production-style system | Restore from backup, document an incident and rebuild from code | Explain architecture, trade-offs, operating procedure, security and limitations. |

The learner should maintain one repository per serious project, with a README, architecture diagram, setup instructions, test instructions, failure notes, security notes, and a short “what I would change in production” section. This output supports future internships and freelance evidence better than a certificate collection.

## 7. Current 90-day execution plan

The current guide correctly says not to start AWS, Kubernetes, advanced AI, or complex DevOps architecture yet.

| Period | Primary work | Free resources | Deliverable |
|---|---|---|---|
| Weeks 1–2 | Baseline computer, Linux, Git and Python test | CS50x, Missing Semester, Python docs | Written self-test and skill scores. |
| Weeks 3–6 | Linux, shell, Git and computer fundamentals | Missing Semester, CS50x, local Linux man pages | Server Toolkit v1. |
| Weeks 7–10 | Python automation, files, JSON/CSV, APIs, CLI, tests and logging | Python docs, CS50x, FastAPI reference when ready | Python automation CLI with tests. |
| Weeks 11–13 | Networking, SQL and HTTP | Networking course/reference, PostgreSQL docs, MDN | Network diagnosis notebook plus database-backed HTTP service skeleton. |
| Month 4 onward | FastAPI/PostgreSQL service and Docker | FastAPI, PostgreSQL, Docker docs | Containerized multi-service application. |
| After the six-month gate | AWS, Terraform, CI/CD, observability and security | AWS, HashiCorp, GitHub Actions, Prometheus, OpenTelemetry and OWASP docs | Reproducible, tested, monitored deployment. |
| Only after that | Kubernetes and distributed-system depth | Kubernetes docs, System Design Primer, selective Build Your Own X project | Local Kubernetes deployment and one systems reconstruction project. |

English should be integrated into every phase through English documentation, English commit messages, spoken explanations, READMEs, bug reports, and architecture notes. Japanese should remain a small habit in the Bangladesh phase, using Irodori, Tadoku, Anki, grammar reference, and listening. It should become a larger professional track only when the technical foundation is stable.

## 8. Resources deliberately excluded from the core

The following are not bad resources. They are excluded because they either duplicate the core, create a cost or access ambiguity, or solve a later problem.

**Large indexes** such as `sindresorhus/awesome`, `free-programming-books`, `Awesome-Hacking`, and `awesome-selfhosted` are not curricula. Their value is retrieval, not sequencing. Reading them linearly would directly violate the guide’s anti-hoarding rule.

**CodeCrafters** is excellent practice, but it should not be counted as fully free for a strict plan unless the exact challenge and feedback limits are verified at the time of use. The free Build Your Own X directory and open project tutorials are safer for the “fully free to everyone” requirement.

**Cloud certificates and paid exams** do not belong in the core. Skill, project evidence, production experience, communication, and then certification is the correct order. A free course with a paid verified certificate remains useful, but the certificate must not be mistaken for free learning or proof of competence.

**AI-first resources** are intentionally delayed. The guide’s later AI Systems Integration stage is reasonable only after Linux, networking, backend, cloud, deployment, security, and operations are dependable. LLM APIs, embeddings, retrieval-augmented generation, vector search, evaluation, model serving, agent patterns, and MLOps should be added as an application layer over strong systems foundations.

## 9. Final judgment on coverage

This plan covers the guide’s explicit learning outcomes with a small number of free resources and a project sequence. It provides strong coverage of computer science foundations, Linux tooling, Git, Python, web basics, SQL/PostgreSQL, backend APIs, Docker, cloud concepts, Terraform, CI/CD, observability, security fundamentals, Kubernetes basics, system design orientation, English integration, and early Japanese study.

It does **not** and cannot guarantee the following from free resources alone: university admission, a bachelor’s degree, IELTS or JLPT results, spoken-language fluency, paid cloud experience without cost, employer-quality code review, production incident exposure, references, salary, immigration eligibility, HSP points, permanent residence, or a job in Europe or Japan. Those outcomes require time, real work, official decisions, money, feedback, and changing external conditions.

The strongest interpretation of “100%+ coverage” is therefore:

> **Every defined topic has a deliberate place in the sequence, every stage has a primary reference, every important capability has a project, and every gate includes testing, failure, repair, and explanation.**

That is achievable. Literal mastery from a list of links is not.

## References

[1]: https://cs50.harvard.edu/x/ "CS50x 2026 — Harvard OpenCourseWare"
[2]: https://missing.csail.mit.edu/ "The Missing Semester of Your CS Education — MIT"
[3]: https://docs.python.org/3/tutorial/ "The Python Tutorial — Python Documentation"
[4]: https://developer.mozilla.org/en-US/docs/Learn_web_development "Learn Web Development — MDN"
[5]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide "JavaScript Guide — MDN"
[6]: https://www.postgresql.org/docs/current/tutorial.html "PostgreSQL Tutorial"
[7]: https://www.postgresql.org/docs/current/sql.html "SQL Commands — PostgreSQL Documentation"
[8]: https://fastapi.tiangolo.com/ "FastAPI Documentation"
[9]: https://docs.docker.com/get-started/ "Docker Get Started"
[10]: https://aws.amazon.com/training/learn-about/ "AWS Learning by Role or Solution"
[11]: https://developer.hashicorp.com/terraform/tutorials "Terraform Tutorials — HashiCorp Developer"
[12]: https://docs.github.com/en/actions "GitHub Actions Documentation"
[13]: https://kubernetes.io/docs/tutorials/kubernetes-basics/ "Learn Kubernetes Basics"
[14]: https://kubernetes.io/docs/home/ "Kubernetes Documentation"
[15]: https://owasp.org/www-project-web-security-testing-guide/ "OWASP Web Security Testing Guide"
[16]: https://owasp.org/www-project-top-ten/ "OWASP Top 10"
[17]: https://prometheus.io/docs/introduction/overview/ "Prometheus Overview"
[18]: https://opentelemetry.io/docs/ "OpenTelemetry Documentation"
[19]: https://github.com/donnemartin/system-design-primer "System Design Primer"
[20]: https://tadoku.org/japanese/en/free-books-en/ "Tadoku Free Books"
[21]: https://www.irodori.jpf.go.jp/en/ "Irodori: Japanese for Life in Japan"
[22]: https://guidetojapanese.org/learn/ "Tae Kim’s Guide to Learning Japanese"
[23]: https://takeielts.britishcouncil.org/take-ielts/prepare "British Council IELTS Preparation"
[24]: https://github.com/trimstray/the-book-of-secret-knowledge "The Book of Secret Knowledge"
[25]: https://github.com/Hack-with-Github/Awesome-Hacking "Awesome Hacking"
[26]: https://github.com/sindresorhus/awesome "Awesome Lists"
[27]: https://github.com/vinta/awesome-python "Awesome Python"
[28]: https://github.com/awesome-selfhosted/awesome-selfhosted "Awesome Self-Hosted"
[29]: https://github.com/practical-tutorials/project-based-learning "Project Based Learning"
[30]: https://roadmap.sh/ "Developer Roadmaps"
[31]: https://github.com/trekhleb/javascript-algorithms "JavaScript Algorithms and Data Structures"
[32]: https://github.com/getify/You-Dont-Know-JS "You Don’t Know JS Yet"
[33]: https://github.com/EbookFoundation/free-programming-books "Free Programming Books"
[34]: https://github.com/30-seconds/30-seconds-of-code "30 Seconds of Code"
[35]: https://github.com/codecrafters-io/build-your-own-x "Build Your Own X"
[36]: https://github.com/freeCodeCamp/freeCodeCamp "freeCodeCamp Open-Source Curriculum"
[37]: https://github.com/collections/learn-to-code "GitHub Learn to Code Collection"
[38]: https://codecrafters.io/ "CodeCrafters"
[39]: https://github.com/codecrafters-io/build-your-own-x "Build Your Own X — Project Directory"
[40]: https://github.com/practical-tutorials/project-based-learning "Project-Based Tutorial Directory"
[41]: https://github.com/trekhleb/javascript-algorithms "JavaScript Algorithms Repository"
[42]: https://github.com/donnemartin/system-design-primer "System Design Primer Repository"
[43]: https://github.com/freeCodeCamp/freeCodeCamp "freeCodeCamp Curriculum Repository"
[44]: https://github.com/codecrafters-io/build-your-own-x "Build Your Own X Repository"

---
