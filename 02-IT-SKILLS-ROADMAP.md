# IT / ENGINEERING SKILLS ROADMAP

## Canonical learning order

### Stage 1 — Computer + Linux + Git
Learn:
- computer architecture basics
- processes, memory, filesystems, OS/kernel concepts
- Linux filesystem, permissions, processes, services, logs
- shell, pipes, redirection, environment variables, exit codes
- SSH, curl, ip, ss
- Git repositories, commits, branches, merges, remotes, diffs, history

Target: independent basic Linux use and normal Git workflows.

### Stage 2 — Python + automation
Learn:
- syntax, variables, conditions, loops
- functions and modules
- lists/dicts/sets/tuples
- exceptions
- files and JSON/CSV
- HTTP/API usage
- virtual environments
- typing basics
- logging
- argparse/CLI
- testing basics
- classes/OOP where useful

Target: solve unfamiliar small automation problems without copying a tutorial.

### Stage 3 — Networking
Learn:
- IPv4, CIDR, subnetting
- public/private IP
- DNS, DHCP, ARP
- TCP/UDP
- ports
- routing and NAT concepts
- HTTP/HTTPS/TLS
- SSH
- firewalls
- reverse proxies and load-balancing concepts

Target: diagnose basic connectivity problems logically.

### Stage 4 — SQL + backend
Learn PostgreSQL properly:
- schema design
- primary/foreign keys
- constraints
- joins
- aggregation
- indexes
- transactions
- normalization
- query planning basics

Web/backend:
- HTTP methods/status codes/headers
- cookies/sessions
- authn/authz
- JSON
- REST concepts
- FastAPI
- validation
- testing
- error handling

Frontend: learn enough HTML/CSS/JavaScript/DOM/fetch to understand the web. Do not specialize in frontend.

### Stage 5 — Docker
Learn:
- images and layers
- containers
- Dockerfiles
- volumes
- networks
- environment variables
- Compose
- logs
- health checks
- resource limits

Target: containerize a multi-service application and diagnose common failures.

### Stage 6 — Cloud
Primary cloud: AWS.
Learn:
- IAM
- EC2
- VPC
- subnets
- route tables
- security groups
- internet/NAT concepts
- S3
- RDS
- load balancers
- CloudWatch
- DNS/Route 53 concepts
- autoscaling concepts

Target: deploy and troubleshoot an application architecture.

### Stage 7 — Infrastructure as Code
Primary tool: Terraform.
Learn:
- providers
- resources
- variables
- outputs
- state
- plan/apply/destroy
- modules
- dependencies

Target: destroy and recreate infrastructure reproducibly.

### Stage 8 — CI/CD
Primary tool: GitHub Actions.
Learn:
- workflows
- triggers
- jobs/steps
- runners
- secrets
- artifacts
- tests/build/deploy
- rollback concepts

Target: changes flow through automated validation into deployment.

### Stage 9 — Observability + security
Learn:
- metrics/logs/traces
- alerts
- SLIs/SLOs
- centralized logging concepts
- least privilege
- secrets
- TLS
- authentication/authorization
- vulnerability/dependency awareness
- backups
- incident response basics

Target: operate systems, not merely deploy them.

### Stage 10 — Kubernetes
Learn:
- Pod
- Deployment
- Service
- Namespace
- ConfigMap
- Secret
- Ingress
- persistent storage
- probes
- resource requests/limits
- scaling
- rolling updates/rollback
- Helm later

Target: deploy, scale, inspect, break and recover a real application.

### Stage 11 — Professional specialization
Choose deeper areas based on university/job opportunities:
- AWS/cloud architecture
- SRE/reliability
- platform engineering
- Kubernetes
- infrastructure security
- automation
- distributed systems

### Stage 12 — AI Systems Integration
Only after strong systems foundations.
Study:
- LLM APIs
- embeddings
- RAG
- vector search
- evaluation
- model serving
- agent patterns
- AI infrastructure/MLOps
- production integration

AI is a later specialization, not the foundation.

## Skill scoring
0 = never learned
1 = familiar
2 = guided
3 = independent
4 = production-capable

Advance when the current skill is at least 3 for normal topics and the stage project is complete.

## Canonical project ladder
1. Server/automation toolkit.
2. Python automation/CLI project.
3. FastAPI + PostgreSQL service.
4. Dockerized multi-service deployment.
5. AWS deployment.
6. Terraform-managed infrastructure.
7. GitHub Actions CI/CD.
8. Monitoring + security layer.
9. Kubernetes deployment.
10. One integrated production-style system.
