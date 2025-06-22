"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Github, ExternalLink, Star, GitFork, Mail, MapPin, Building, Calendar, Users, BookOpen } from 'lucide-react'

export default function Portfolio() {
  const user = {
  "login": "tharun977",
  "id": 116884536,
  "node_id": "U_kgDOBveEOA",
  "avatar_url": "https://avatars.githubusercontent.com/u/116884536?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/tharun977",
  "html_url": "https://github.com/tharun977",
  "followers_url": "https://api.github.com/users/tharun977/followers",
  "following_url": "https://api.github.com/users/tharun977/following{/other_user}",
  "gists_url": "https://api.github.com/users/tharun977/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/tharun977/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/tharun977/subscriptions",
  "organizations_url": "https://api.github.com/users/tharun977/orgs",
  "repos_url": "https://api.github.com/users/tharun977/repos",
  "events_url": "https://api.github.com/users/tharun977/events{/privacy}",
  "received_events_url": "https://api.github.com/users/tharun977/received_events",
  "type": "User",
  "user_view_type": "public",
  "site_admin": false,
  "name": "Tharun Raman",
  "company": null,
  "blog": "",
  "location": "Kanhangad,Kerala,India",
  "email": "tharunraman10@gmail.com",
  "hireable": true,
  "bio": "As an Integrated MSc student in Computer Science specializing in AI and ML, I’m driven by a deep passion for technology. My journey in AI, ML, and deep learning",
  "twitter_username": "echotharun",
  "public_repos": 49,
  "public_gists": 0,
  "followers": 44,
  "following": 20,
  "created_at": "2022-10-28T10:49:59Z",
  "updated_at": "2025-06-22T06:31:12Z"
}
  const repos = [
  {
    "id": 929396208,
    "node_id": "R_kgDON2V18A",
    "name": "spot-main",
    "full_name": "tharun977/spot-main",
    "private": false,
    "owner": {
      "login": "tharun977",
      "id": 116884536,
      "node_id": "U_kgDOBveEOA",
      "avatar_url": "https://avatars.githubusercontent.com/u/116884536?v=4",
      "gravatar_id": "",
      "url": "https://api.github.com/users/tharun977",
      "html_url": "https://github.com/tharun977",
      "followers_url": "https://api.github.com/users/tharun977/followers",
      "following_url": "https://api.github.com/users/tharun977/following{/other_user}",
      "gists_url": "https://api.github.com/users/tharun977/gists{/gist_id}",
      "starred_url": "https://api.github.com/users/tharun977/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/tharun977/subscriptions",
      "organizations_url": "https://api.github.com/users/tharun977/orgs",
      "repos_url": "https://api.github.com/users/tharun977/repos",
      "events_url": "https://api.github.com/users/tharun977/events{/privacy}",
      "received_events_url": "https://api.github.com/users/tharun977/received_events",
      "type": "User",
      "user_view_type": "public",
      "site_admin": false
    },
    "html_url": "https://github.com/tharun977/spot-main",
    "description": "A Django-based smart parking management system that enables efficient parking space tracking, automated payment processing, and a modern UI.",
    "fork": false,
    "url": "https://api.github.com/repos/tharun977/spot-main",
    "forks_url": "https://api.github.com/repos/tharun977/spot-main/forks",
    "keys_url": "https://api.github.com/repos/tharun977/spot-main/keys{/key_id}",
    "collaborators_url": "https://api.github.com/repos/tharun977/spot-main/collaborators{/collaborator}",
    "teams_url": "https://api.github.com/repos/tharun977/spot-main/teams",
    "hooks_url": "https://api.github.com/repos/tharun977/spot-main/hooks",
    "issue_events_url": "https://api.github.com/repos/tharun977/spot-main/issues/events{/number}",
    "events_url": "https://api.github.com/repos/tharun977/spot-main/events",
    "assignees_url": "https://api.github.com/repos/tharun977/spot-main/assignees{/user}",
    "branches_url": "https://api.github.com/repos/tharun977/spot-main/branches{/branch}",
    "tags_url": "https://api.github.com/repos/tharun977/spot-main/tags",
    "blobs_url": "https://api.github.com/repos/tharun977/spot-main/git/blobs{/sha}",
    "git_tags_url": "https://api.github.com/repos/tharun977/spot-main/git/tags{/sha}",
    "git_refs_url": "https://api.github.com/repos/tharun977/spot-main/git/refs{/sha}",
    "trees_url": "https://api.github.com/repos/tharun977/spot-main/git/trees{/sha}",
    "statuses_url": "https://api.github.com/repos/tharun977/spot-main/statuses/{sha}",
    "languages_url": "https://api.github.com/repos/tharun977/spot-main/languages",
    "stargazers_url": "https://api.github.com/repos/tharun977/spot-main/stargazers",
    "contributors_url": "https://api.github.com/repos/tharun977/spot-main/contributors",
    "subscribers_url": "https://api.github.com/repos/tharun977/spot-main/subscribers",
    "subscription_url": "https://api.github.com/repos/tharun977/spot-main/subscription",
    "commits_url": "https://api.github.com/repos/tharun977/spot-main/commits{/sha}",
    "git_commits_url": "https://api.github.com/repos/tharun977/spot-main/git/commits{/sha}",
    "comments_url": "https://api.github.com/repos/tharun977/spot-main/comments{/number}",
    "issue_comment_url": "https://api.github.com/repos/tharun977/spot-main/issues/comments{/number}",
    "contents_url": "https://api.github.com/repos/tharun977/spot-main/contents/{+path}",
    "compare_url": "https://api.github.com/repos/tharun977/spot-main/compare/{base}...{head}",
    "merges_url": "https://api.github.com/repos/tharun977/spot-main/merges",
    "archive_url": "https://api.github.com/repos/tharun977/spot-main/{archive_format}{/ref}",
    "downloads_url": "https://api.github.com/repos/tharun977/spot-main/downloads",
    "issues_url": "https://api.github.com/repos/tharun977/spot-main/issues{/number}",
    "pulls_url": "https://api.github.com/repos/tharun977/spot-main/pulls{/number}",
    "milestones_url": "https://api.github.com/repos/tharun977/spot-main/milestones{/number}",
    "notifications_url": "https://api.github.com/repos/tharun977/spot-main/notifications{?since,all,participating}",
    "labels_url": "https://api.github.com/repos/tharun977/spot-main/labels{/name}",
    "releases_url": "https://api.github.com/repos/tharun977/spot-main/releases{/id}",
    "deployments_url": "https://api.github.com/repos/tharun977/spot-main/deployments",
    "created_at": "2025-02-08T13:02:40Z",
    "updated_at": "2025-05-12T11:31:12Z",
    "pushed_at": "2025-05-05T17:18:15Z",
    "git_url": "git://github.com/tharun977/spot-main.git",
    "ssh_url": "git@github.com:tharun977/spot-main.git",
    "clone_url": "https://github.com/tharun977/spot-main.git",
    "svn_url": "https://github.com/tharun977/spot-main",
    "homepage": "",
    "size": 102450,
    "stargazers_count": 1,
    "watchers_count": 1,
    "language": "Python",
    "has_issues": true,
    "has_projects": true,
    "has_downloads": true,
    "has_wiki": false,
    "has_pages": false,
    "has_discussions": false,
    "forks_count": 0,
    "mirror_url": null,
    "archived": false,
    "disabled": false,
    "open_issues_count": 1,
    "license": {
      "key": "mit",
      "name": "MIT License",
      "spdx_id": "MIT",
      "url": "https://api.github.com/licenses/mit",
      "node_id": "MDc6TGljZW5zZTEz"
    },
    "allow_forking": true,
    "is_template": false,
    "web_commit_signoff_required": false,
    "topics": [
      "bootstrap5",
      "django",
      "django-application",
      "project",
      "sqlite3"
    ],
    "visibility": "public",
    "forks": 0,
    "open_issues": 1,
    "watchers": 1,
    "default_branch": "main",
    "permissions": {
      "admin": true,
      "maintain": true,
      "push": true,
      "triage": true,
      "pull": true
    },
    "readme": "\n# 🚗 SPOT - Smart Parking Organization Tool  \n\nSPOT is a **Django-based web application** designed to streamline parking management efficiently. The system enables users to register parking details, track vehicle entries and exits, calculate parking duration, process payments, and manage parking lot operations—all with a **modern, responsive UI**.  \n\n![Spot Banner](./home/static/images/spot-banner.png)\n\n## 📌 Features  \n✅ **Add Parking Records** – Register vehicle details and assign parking spots.  \n✅ **Track Vehicle Entries & Exits** – Log entry and exit times.  \n✅ **Calculate Parking Duration** – Automatically compute time parked.  \n✅ **Payment System** – Update and track parking payments.  \n✅ **Glassmorphism UI** – A sleek, modern, and responsive design.  \n✅ **Admin Authorization** – Track who authorized the parking entry.  \n\n## 🏗️ Tech Stack  \n🔹 **Backend:** Django (Python)  \n🔹 **Frontend:** HTML, CSS (Glassmorphism UI)  \n🔹 **Database:** SQLite / PostgreSQL  \n🔹 **Templating:** Django Templates  \n\n## 🚀 Getting Started  \n\n### 1️⃣ Clone the Repository  \n```sh\ngit clone https://github.com/tharun977spot-main.git\ncd spot-main\n```\n\n### 2️⃣ Set Up a Virtual Environment  \n```sh\npython -m venv venv\nsource venv/bin/activate  # On Windows use: venv\\Scripts\\activate\n```\n\n### 3️⃣ Install Dependencies  \n```sh\npip install -r requirements.txt\n```\n\n### 4️⃣ Apply Migrations  \n```sh\npython manage.py migrate\n```\n\n### 5️⃣ Run the Server  \n```sh\npython manage.py runserver\n```\nNow, open **http://127.0.0.1:8000/** in your browser! 🚀  \n\n## 📂 Project Structure  \n```\nSPOT/\n│── parking/              # Parking app (Django app)\n│   ├── templates/        # HTML Templates\n│   ├── static/           # CSS & JS Files\n│   ├── views.py          # Views (Business logic)\n│   ├── models.py         # Database models\n│   ├── urls.py           # URL routing\n│── spot/                 # Main Django project settings\n│── db.sqlite3            # Database file (for development)\n│── manage.py             # Django project management script\n│── requirements.txt      # Dependencies\n│── README.md             # Project documentation\n```\n\n## 🛠️ Environment Variables  \nMake sure to create a **`.env`** file in the root directory and set the required environment variables. Example:  \n```ini\nSECRET_KEY=your_secret_key\nDEBUG=True\nDATABASE_URL=sqlite:///db.sqlite3\n```\n\n## 📸 UI Preview  \n<img src=\"screenshot.png\" alt=\"SPOT Dashboard\" width=\"600\">  \n\n## 💡 Future Enhancements  \n🔹 **QR Code Integration** for quick check-ins  \n🔹 **Role-Based Access Control** for admins and staff  \n🔹 **Automated Payment System** with online transactions  \n\n## 🤝 Contributing  \n1. **Fork the repository**  \n2. **Create a new branch:** `git checkout -b feature-branch`  \n3. **Commit your changes:** `git commit -m \"Add new feature\"`  \n4. **Push to the branch:** `git push origin feature-branch`  \n5. **Submit a pull request** 🚀  \n\n## 📜 License  \nThis project is **open-source** and available under the **MIT License**.  \n\n---\n\n👨‍💻 Developed by **Tharun Raman & Rohan Ravindran**  \n"
  },
  {
    "id": 850690367,
    "node_id": "R_kgDOMrSBPw",
    "name": "CodeAlpha",
    "full_name": "tharun977/CodeAlpha",
    "private": false,
    "owner": {
      "login": "tharun977",
      "id": 116884536,
      "node_id": "U_kgDOBveEOA",
      "avatar_url": "https://avatars.githubusercontent.com/u/116884536?v=4",
      "gravatar_id": "",
      "url": "https://api.github.com/users/tharun977",
      "html_url": "https://github.com/tharun977",
      "followers_url": "https://api.github.com/users/tharun977/followers",
      "following_url": "https://api.github.com/users/tharun977/following{/other_user}",
      "gists_url": "https://api.github.com/users/tharun977/gists{/gist_id}",
      "starred_url": "https://api.github.com/users/tharun977/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/tharun977/subscriptions",
      "organizations_url": "https://api.github.com/users/tharun977/orgs",
      "repos_url": "https://api.github.com/users/tharun977/repos",
      "events_url": "https://api.github.com/users/tharun977/events{/privacy}",
      "received_events_url": "https://api.github.com/users/tharun977/received_events",
      "type": "User",
      "user_view_type": "public",
      "site_admin": false
    },
    "html_url": "https://github.com/tharun977/CodeAlpha",
    "description": "The projects i have done during the internship with code alpha.",
    "fork": false,
    "url": "https://api.github.com/repos/tharun977/CodeAlpha",
    "forks_url": "https://api.github.com/repos/tharun977/CodeAlpha/forks",
    "keys_url": "https://api.github.com/repos/tharun977/CodeAlpha/keys{/key_id}",
    "collaborators_url": "https://api.github.com/repos/tharun977/CodeAlpha/collaborators{/collaborator}",
    "teams_url": "https://api.github.com/repos/tharun977/CodeAlpha/teams",
    "hooks_url": "https://api.github.com/repos/tharun977/CodeAlpha/hooks",
    "issue_events_url": "https://api.github.com/repos/tharun977/CodeAlpha/issues/events{/number}",
    "events_url": "https://api.github.com/repos/tharun977/CodeAlpha/events",
    "assignees_url": "https://api.github.com/repos/tharun977/CodeAlpha/assignees{/user}",
    "branches_url": "https://api.github.com/repos/tharun977/CodeAlpha/branches{/branch}",
    "tags_url": "https://api.github.com/repos/tharun977/CodeAlpha/tags",
    "blobs_url": "https://api.github.com/repos/tharun977/CodeAlpha/git/blobs{/sha}",
    "git_tags_url": "https://api.github.com/repos/tharun977/CodeAlpha/git/tags{/sha}",
    "git_refs_url": "https://api.github.com/repos/tharun977/CodeAlpha/git/refs{/sha}",
    "trees_url": "https://api.github.com/repos/tharun977/CodeAlpha/git/trees{/sha}",
    "statuses_url": "https://api.github.com/repos/tharun977/CodeAlpha/statuses/{sha}",
    "languages_url": "https://api.github.com/repos/tharun977/CodeAlpha/languages",
    "stargazers_url": "https://api.github.com/repos/tharun977/CodeAlpha/stargazers",
    "contributors_url": "https://api.github.com/repos/tharun977/CodeAlpha/contributors",
    "subscribers_url": "https://api.github.com/repos/tharun977/CodeAlpha/subscribers",
    "subscription_url": "https://api.github.com/repos/tharun977/CodeAlpha/subscription",
    "commits_url": "https://api.github.com/repos/tharun977/CodeAlpha/commits{/sha}",
    "git_commits_url": "https://api.github.com/repos/tharun977/CodeAlpha/git/commits{/sha}",
    "comments_url": "https://api.github.com/repos/tharun977/CodeAlpha/comments{/number}",
    "issue_comment_url": "https://api.github.com/repos/tharun977/CodeAlpha/issues/comments{/number}",
    "contents_url": "https://api.github.com/repos/tharun977/CodeAlpha/contents/{+path}",
    "compare_url": "https://api.github.com/repos/tharun977/CodeAlpha/compare/{base}...{head}",
    "merges_url": "https://api.github.com/repos/tharun977/CodeAlpha/merges",
    "archive_url": "https://api.github.com/repos/tharun977/CodeAlpha/{archive_format}{/ref}",
    "downloads_url": "https://api.github.com/repos/tharun977/CodeAlpha/downloads",
    "issues_url": "https://api.github.com/repos/tharun977/CodeAlpha/issues{/number}",
    "pulls_url": "https://api.github.com/repos/tharun977/CodeAlpha/pulls{/number}",
    "milestones_url": "https://api.github.com/repos/tharun977/CodeAlpha/milestones{/number}",
    "notifications_url": "https://api.github.com/repos/tharun977/CodeAlpha/notifications{?since,all,participating}",
    "labels_url": "https://api.github.com/repos/tharun977/CodeAlpha/labels{/name}",
    "releases_url": "https://api.github.com/repos/tharun977/CodeAlpha/releases{/id}",
    "deployments_url": "https://api.github.com/repos/tharun977/CodeAlpha/deployments",
    "created_at": "2024-09-01T14:04:52Z",
    "updated_at": "2024-11-20T18:02:37Z",
    "pushed_at": "2024-09-10T15:25:05Z",
    "git_url": "git://github.com/tharun977/CodeAlpha.git",
    "ssh_url": "git@github.com:tharun977/CodeAlpha.git",
    "clone_url": "https://github.com/tharun977/CodeAlpha.git",
    "svn_url": "https://github.com/tharun977/CodeAlpha",
    "homepage": "",
    "size": 16236,
    "stargazers_count": 1,
    "watchers_count": 1,
    "language": "JavaScript",
    "has_issues": true,
    "has_projects": true,
    "has_downloads": true,
    "has_wiki": true,
    "has_pages": true,
    "has_discussions": false,
    "forks_count": 0,
    "mirror_url": null,
    "archived": false,
    "disabled": false,
    "open_issues_count": 0,
    "license": null,
    "allow_forking": true,
    "is_template": false,
    "web_commit_signoff_required": false,
    "topics": [],
    "visibility": "public",
    "forks": 0,
    "open_issues": 0,
    "watchers": 1,
    "default_branch": "main",
    "permissions": {
      "admin": true,
      "maintain": true,
      "push": true,
      "triage": true,
      "pull": true
    }
  },
  {
    "id": 1006402555,
    "node_id": "R_kgDOO_x7-w",
    "name": "tharun977-portfolio-4",
    "full_name": "tharun977/tharun977-portfolio-4",
    "private": false,
    "owner": {
      "login": "tharun977",
      "id": 116884536,
      "node_id": "U_kgDOBveEOA",
      "avatar_url": "https://avatars.githubusercontent.com/u/116884536?v=4",
      "gravatar_id": "",
      "url": "https://api.github.com/users/tharun977",
      "html_url": "https://github.com/tharun977",
      "followers_url": "https://api.github.com/users/tharun977/followers",
      "following_url": "https://api.github.com/users/tharun977/following{/other_user}",
      "gists_url": "https://api.github.com/users/tharun977/gists{/gist_id}",
      "starred_url": "https://api.github.com/users/tharun977/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/tharun977/subscriptions",
      "organizations_url": "https://api.github.com/users/tharun977/orgs",
      "repos_url": "https://api.github.com/users/tharun977/repos",
      "events_url": "https://api.github.com/users/tharun977/events{/privacy}",
      "received_events_url": "https://api.github.com/users/tharun977/received_events",
      "type": "User",
      "user_view_type": "public",
      "site_admin": false
    },
    "html_url": "https://github.com/tharun977/tharun977-portfolio-4",
    "description": "Portfolio website for Tharun Raman - Generated with DevForge",
    "fork": false,
    "url": "https://api.github.com/repos/tharun977/tharun977-portfolio-4",
    "forks_url": "https://api.github.com/repos/tharun977/tharun977-portfolio-4/forks",
    "keys_url": "https://api.github.com/repos/tharun977/tharun977-portfolio-4/keys{/key_id}",
    "collaborators_url": "https://api.github.com/repos/tharun977/tharun977-portfolio-4/collaborators{/collaborator}",
    "teams_url": "https://api.github.com/repos/tharun977/tharun977-portfolio-4/teams",
    "hooks_url": "https://api.github.com/repos/tharun977/tharun977-portfolio-4/hooks",
    "issue_events_url": "https://api.github.com/repos/tharun977/tharun977-portfolio-4/issues/events{/number}",
    "events_url": "https://api.github.com/repos/tharun977/tharun977-portfolio-4/events",
    "assignees_url": "https://api.github.com/repos/tharun977/tharun977-portfolio-4/assignees{/user}",
    "branches_url": "https://api.github.com/repos/tharun977/tharun977-portfolio-4/branches{/branch}",
    "tags_url": "https://api.github.com/repos/tharun977/tharun977-portfolio-4/tags",
    "blobs_url": "https://api.github.com/repos/tharun977/tharun977-portfolio-4/git/blobs{/sha}",
    "git_tags_url": "https://api.github.com/repos/tharun977/tharun977-portfolio-4/git/tags{/sha}",
    "git_refs_url": "https://api.github.com/repos/tharun977/tharun977-portfolio-4/git/refs{/sha}",
    "trees_url": "https://api.github.com/repos/tharun977/tharun977-portfolio-4/git/trees{/sha}",
    "statuses_url": "https://api.github.com/repos/tharun977/tharun977-portfolio-4/statuses/{sha}",
    "languages_url": "https://api.github.com/repos/tharun977/tharun977-portfolio-4/languages",
    "stargazers_url": "https://api.github.com/repos/tharun977/tharun977-portfolio-4/stargazers",
    "contributors_url": "https://api.github.com/repos/tharun977/tharun977-portfolio-4/contributors",
    "subscribers_url": "https://api.github.com/repos/tharun977/tharun977-portfolio-4/subscribers",
    "subscription_url": "https://api.github.com/repos/tharun977/tharun977-portfolio-4/subscription",
    "commits_url": "https://api.github.com/repos/tharun977/tharun977-portfolio-4/commits{/sha}",
    "git_commits_url": "https://api.github.com/repos/tharun977/tharun977-portfolio-4/git/commits{/sha}",
    "comments_url": "https://api.github.com/repos/tharun977/tharun977-portfolio-4/comments{/number}",
    "issue_comment_url": "https://api.github.com/repos/tharun977/tharun977-portfolio-4/issues/comments{/number}",
    "contents_url": "https://api.github.com/repos/tharun977/tharun977-portfolio-4/contents/{+path}",
    "compare_url": "https://api.github.com/repos/tharun977/tharun977-portfolio-4/compare/{base}...{head}",
    "merges_url": "https://api.github.com/repos/tharun977/tharun977-portfolio-4/merges",
    "archive_url": "https://api.github.com/repos/tharun977/tharun977-portfolio-4/{archive_format}{/ref}",
    "downloads_url": "https://api.github.com/repos/tharun977/tharun977-portfolio-4/downloads",
    "issues_url": "https://api.github.com/repos/tharun977/tharun977-portfolio-4/issues{/number}",
    "pulls_url": "https://api.github.com/repos/tharun977/tharun977-portfolio-4/pulls{/number}",
    "milestones_url": "https://api.github.com/repos/tharun977/tharun977-portfolio-4/milestones{/number}",
    "notifications_url": "https://api.github.com/repos/tharun977/tharun977-portfolio-4/notifications{?since,all,participating}",
    "labels_url": "https://api.github.com/repos/tharun977/tharun977-portfolio-4/labels{/name}",
    "releases_url": "https://api.github.com/repos/tharun977/tharun977-portfolio-4/releases{/id}",
    "deployments_url": "https://api.github.com/repos/tharun977/tharun977-portfolio-4/deployments",
    "created_at": "2025-06-22T07:24:31Z",
    "updated_at": "2025-06-22T07:24:34Z",
    "pushed_at": "2025-06-22T07:24:31Z",
    "git_url": "git://github.com/tharun977/tharun977-portfolio-4.git",
    "ssh_url": "git@github.com:tharun977/tharun977-portfolio-4.git",
    "clone_url": "https://github.com/tharun977/tharun977-portfolio-4.git",
    "svn_url": "https://github.com/tharun977/tharun977-portfolio-4",
    "homepage": null,
    "size": 0,
    "stargazers_count": 0,
    "watchers_count": 0,
    "language": null,
    "has_issues": true,
    "has_projects": true,
    "has_downloads": true,
    "has_wiki": true,
    "has_pages": false,
    "has_discussions": false,
    "forks_count": 0,
    "mirror_url": null,
    "archived": false,
    "disabled": false,
    "open_issues_count": 0,
    "license": null,
    "allow_forking": true,
    "is_template": false,
    "web_commit_signoff_required": false,
    "topics": [],
    "visibility": "public",
    "forks": 0,
    "open_issues": 0,
    "watchers": 0,
    "default_branch": "main",
    "permissions": {
      "admin": true,
      "maintain": true,
      "push": true,
      "triage": true,
      "pull": true
    },
    "readme": "# tharun977-portfolio-4\nPortfolio website for Tharun Raman - Generated with DevForge\n"
  },
  {
    "id": 1006400132,
    "node_id": "R_kgDOO_xyhA",
    "name": "tharun977-portfolio-3",
    "full_name": "tharun977/tharun977-portfolio-3",
    "private": false,
    "owner": {
      "login": "tharun977",
      "id": 116884536,
      "node_id": "U_kgDOBveEOA",
      "avatar_url": "https://avatars.githubusercontent.com/u/116884536?v=4",
      "gravatar_id": "",
      "url": "https://api.github.com/users/tharun977",
      "html_url": "https://github.com/tharun977",
      "followers_url": "https://api.github.com/users/tharun977/followers",
      "following_url": "https://api.github.com/users/tharun977/following{/other_user}",
      "gists_url": "https://api.github.com/users/tharun977/gists{/gist_id}",
      "starred_url": "https://api.github.com/users/tharun977/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/tharun977/subscriptions",
      "organizations_url": "https://api.github.com/users/tharun977/orgs",
      "repos_url": "https://api.github.com/users/tharun977/repos",
      "events_url": "https://api.github.com/users/tharun977/events{/privacy}",
      "received_events_url": "https://api.github.com/users/tharun977/received_events",
      "type": "User",
      "user_view_type": "public",
      "site_admin": false
    },
    "html_url": "https://github.com/tharun977/tharun977-portfolio-3",
    "description": "Portfolio website for Tharun Raman - Generated with DevForge",
    "fork": false,
    "url": "https://api.github.com/repos/tharun977/tharun977-portfolio-3",
    "forks_url": "https://api.github.com/repos/tharun977/tharun977-portfolio-3/forks",
    "keys_url": "https://api.github.com/repos/tharun977/tharun977-portfolio-3/keys{/key_id}",
    "collaborators_url": "https://api.github.com/repos/tharun977/tharun977-portfolio-3/collaborators{/collaborator}",
    "teams_url": "https://api.github.com/repos/tharun977/tharun977-portfolio-3/teams",
    "hooks_url": "https://api.github.com/repos/tharun977/tharun977-portfolio-3/hooks",
    "issue_events_url": "https://api.github.com/repos/tharun977/tharun977-portfolio-3/issues/events{/number}",
    "events_url": "https://api.github.com/repos/tharun977/tharun977-portfolio-3/events",
    "assignees_url": "https://api.github.com/repos/tharun977/tharun977-portfolio-3/assignees{/user}",
    "branches_url": "https://api.github.com/repos/tharun977/tharun977-portfolio-3/branches{/branch}",
    "tags_url": "https://api.github.com/repos/tharun977/tharun977-portfolio-3/tags",
    "blobs_url": "https://api.github.com/repos/tharun977/tharun977-portfolio-3/git/blobs{/sha}",
    "git_tags_url": "https://api.github.com/repos/tharun977/tharun977-portfolio-3/git/tags{/sha}",
    "git_refs_url": "https://api.github.com/repos/tharun977/tharun977-portfolio-3/git/refs{/sha}",
    "trees_url": "https://api.github.com/repos/tharun977/tharun977-portfolio-3/git/trees{/sha}",
    "statuses_url": "https://api.github.com/repos/tharun977/tharun977-portfolio-3/statuses/{sha}",
    "languages_url": "https://api.github.com/repos/tharun977/tharun977-portfolio-3/languages",
    "stargazers_url": "https://api.github.com/repos/tharun977/tharun977-portfolio-3/stargazers",
    "contributors_url": "https://api.github.com/repos/tharun977/tharun977-portfolio-3/contributors",
    "subscribers_url": "https://api.github.com/repos/tharun977/tharun977-portfolio-3/subscribers",
    "subscription_url": "https://api.github.com/repos/tharun977/tharun977-portfolio-3/subscription",
    "commits_url": "https://api.github.com/repos/tharun977/tharun977-portfolio-3/commits{/sha}",
    "git_commits_url": "https://api.github.com/repos/tharun977/tharun977-portfolio-3/git/commits{/sha}",
    "comments_url": "https://api.github.com/repos/tharun977/tharun977-portfolio-3/comments{/number}",
    "issue_comment_url": "https://api.github.com/repos/tharun977/tharun977-portfolio-3/issues/comments{/number}",
    "contents_url": "https://api.github.com/repos/tharun977/tharun977-portfolio-3/contents/{+path}",
    "compare_url": "https://api.github.com/repos/tharun977/tharun977-portfolio-3/compare/{base}...{head}",
    "merges_url": "https://api.github.com/repos/tharun977/tharun977-portfolio-3/merges",
    "archive_url": "https://api.github.com/repos/tharun977/tharun977-portfolio-3/{archive_format}{/ref}",
    "downloads_url": "https://api.github.com/repos/tharun977/tharun977-portfolio-3/downloads",
    "issues_url": "https://api.github.com/repos/tharun977/tharun977-portfolio-3/issues{/number}",
    "pulls_url": "https://api.github.com/repos/tharun977/tharun977-portfolio-3/pulls{/number}",
    "milestones_url": "https://api.github.com/repos/tharun977/tharun977-portfolio-3/milestones{/number}",
    "notifications_url": "https://api.github.com/repos/tharun977/tharun977-portfolio-3/notifications{?since,all,participating}",
    "labels_url": "https://api.github.com/repos/tharun977/tharun977-portfolio-3/labels{/name}",
    "releases_url": "https://api.github.com/repos/tharun977/tharun977-portfolio-3/releases{/id}",
    "deployments_url": "https://api.github.com/repos/tharun977/tharun977-portfolio-3/deployments",
    "created_at": "2025-06-22T07:16:50Z",
    "updated_at": "2025-06-22T07:16:54Z",
    "pushed_at": "2025-06-22T07:16:50Z",
    "git_url": "git://github.com/tharun977/tharun977-portfolio-3.git",
    "ssh_url": "git@github.com:tharun977/tharun977-portfolio-3.git",
    "clone_url": "https://github.com/tharun977/tharun977-portfolio-3.git",
    "svn_url": "https://github.com/tharun977/tharun977-portfolio-3",
    "homepage": null,
    "size": 0,
    "stargazers_count": 0,
    "watchers_count": 0,
    "language": null,
    "has_issues": true,
    "has_projects": true,
    "has_downloads": true,
    "has_wiki": true,
    "has_pages": false,
    "has_discussions": false,
    "forks_count": 0,
    "mirror_url": null,
    "archived": false,
    "disabled": false,
    "open_issues_count": 0,
    "license": null,
    "allow_forking": true,
    "is_template": false,
    "web_commit_signoff_required": false,
    "topics": [],
    "visibility": "public",
    "forks": 0,
    "open_issues": 0,
    "watchers": 0,
    "default_branch": "main",
    "permissions": {
      "admin": true,
      "maintain": true,
      "push": true,
      "triage": true,
      "pull": true
    },
    "readme": "# tharun977-portfolio-3\nPortfolio website for Tharun Raman - Generated with DevForge\n"
  },
  {
    "id": 1006398247,
    "node_id": "R_kgDOO_xrJw",
    "name": "tharun977-portfolio-2",
    "full_name": "tharun977/tharun977-portfolio-2",
    "private": false,
    "owner": {
      "login": "tharun977",
      "id": 116884536,
      "node_id": "U_kgDOBveEOA",
      "avatar_url": "https://avatars.githubusercontent.com/u/116884536?v=4",
      "gravatar_id": "",
      "url": "https://api.github.com/users/tharun977",
      "html_url": "https://github.com/tharun977",
      "followers_url": "https://api.github.com/users/tharun977/followers",
      "following_url": "https://api.github.com/users/tharun977/following{/other_user}",
      "gists_url": "https://api.github.com/users/tharun977/gists{/gist_id}",
      "starred_url": "https://api.github.com/users/tharun977/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/tharun977/subscriptions",
      "organizations_url": "https://api.github.com/users/tharun977/orgs",
      "repos_url": "https://api.github.com/users/tharun977/repos",
      "events_url": "https://api.github.com/users/tharun977/events{/privacy}",
      "received_events_url": "https://api.github.com/users/tharun977/received_events",
      "type": "User",
      "user_view_type": "public",
      "site_admin": false
    },
    "html_url": "https://github.com/tharun977/tharun977-portfolio-2",
    "description": "Portfolio website for Tharun Raman - Generated with DevForge",
    "fork": false,
    "url": "https://api.github.com/repos/tharun977/tharun977-portfolio-2",
    "forks_url": "https://api.github.com/repos/tharun977/tharun977-portfolio-2/forks",
    "keys_url": "https://api.github.com/repos/tharun977/tharun977-portfolio-2/keys{/key_id}",
    "collaborators_url": "https://api.github.com/repos/tharun977/tharun977-portfolio-2/collaborators{/collaborator}",
    "teams_url": "https://api.github.com/repos/tharun977/tharun977-portfolio-2/teams",
    "hooks_url": "https://api.github.com/repos/tharun977/tharun977-portfolio-2/hooks",
    "issue_events_url": "https://api.github.com/repos/tharun977/tharun977-portfolio-2/issues/events{/number}",
    "events_url": "https://api.github.com/repos/tharun977/tharun977-portfolio-2/events",
    "assignees_url": "https://api.github.com/repos/tharun977/tharun977-portfolio-2/assignees{/user}",
    "branches_url": "https://api.github.com/repos/tharun977/tharun977-portfolio-2/branches{/branch}",
    "tags_url": "https://api.github.com/repos/tharun977/tharun977-portfolio-2/tags",
    "blobs_url": "https://api.github.com/repos/tharun977/tharun977-portfolio-2/git/blobs{/sha}",
    "git_tags_url": "https://api.github.com/repos/tharun977/tharun977-portfolio-2/git/tags{/sha}",
    "git_refs_url": "https://api.github.com/repos/tharun977/tharun977-portfolio-2/git/refs{/sha}",
    "trees_url": "https://api.github.com/repos/tharun977/tharun977-portfolio-2/git/trees{/sha}",
    "statuses_url": "https://api.github.com/repos/tharun977/tharun977-portfolio-2/statuses/{sha}",
    "languages_url": "https://api.github.com/repos/tharun977/tharun977-portfolio-2/languages",
    "stargazers_url": "https://api.github.com/repos/tharun977/tharun977-portfolio-2/stargazers",
    "contributors_url": "https://api.github.com/repos/tharun977/tharun977-portfolio-2/contributors",
    "subscribers_url": "https://api.github.com/repos/tharun977/tharun977-portfolio-2/subscribers",
    "subscription_url": "https://api.github.com/repos/tharun977/tharun977-portfolio-2/subscription",
    "commits_url": "https://api.github.com/repos/tharun977/tharun977-portfolio-2/commits{/sha}",
    "git_commits_url": "https://api.github.com/repos/tharun977/tharun977-portfolio-2/git/commits{/sha}",
    "comments_url": "https://api.github.com/repos/tharun977/tharun977-portfolio-2/comments{/number}",
    "issue_comment_url": "https://api.github.com/repos/tharun977/tharun977-portfolio-2/issues/comments{/number}",
    "contents_url": "https://api.github.com/repos/tharun977/tharun977-portfolio-2/contents/{+path}",
    "compare_url": "https://api.github.com/repos/tharun977/tharun977-portfolio-2/compare/{base}...{head}",
    "merges_url": "https://api.github.com/repos/tharun977/tharun977-portfolio-2/merges",
    "archive_url": "https://api.github.com/repos/tharun977/tharun977-portfolio-2/{archive_format}{/ref}",
    "downloads_url": "https://api.github.com/repos/tharun977/tharun977-portfolio-2/downloads",
    "issues_url": "https://api.github.com/repos/tharun977/tharun977-portfolio-2/issues{/number}",
    "pulls_url": "https://api.github.com/repos/tharun977/tharun977-portfolio-2/pulls{/number}",
    "milestones_url": "https://api.github.com/repos/tharun977/tharun977-portfolio-2/milestones{/number}",
    "notifications_url": "https://api.github.com/repos/tharun977/tharun977-portfolio-2/notifications{?since,all,participating}",
    "labels_url": "https://api.github.com/repos/tharun977/tharun977-portfolio-2/labels{/name}",
    "releases_url": "https://api.github.com/repos/tharun977/tharun977-portfolio-2/releases{/id}",
    "deployments_url": "https://api.github.com/repos/tharun977/tharun977-portfolio-2/deployments",
    "created_at": "2025-06-22T07:11:14Z",
    "updated_at": "2025-06-22T07:11:18Z",
    "pushed_at": "2025-06-22T07:11:15Z",
    "git_url": "git://github.com/tharun977/tharun977-portfolio-2.git",
    "ssh_url": "git@github.com:tharun977/tharun977-portfolio-2.git",
    "clone_url": "https://github.com/tharun977/tharun977-portfolio-2.git",
    "svn_url": "https://github.com/tharun977/tharun977-portfolio-2",
    "homepage": null,
    "size": 0,
    "stargazers_count": 0,
    "watchers_count": 0,
    "language": null,
    "has_issues": true,
    "has_projects": true,
    "has_downloads": true,
    "has_wiki": true,
    "has_pages": false,
    "has_discussions": false,
    "forks_count": 0,
    "mirror_url": null,
    "archived": false,
    "disabled": false,
    "open_issues_count": 0,
    "license": null,
    "allow_forking": true,
    "is_template": false,
    "web_commit_signoff_required": false,
    "topics": [],
    "visibility": "public",
    "forks": 0,
    "open_issues": 0,
    "watchers": 0,
    "default_branch": "main",
    "permissions": {
      "admin": true,
      "maintain": true,
      "push": true,
      "triage": true,
      "pull": true
    },
    "readme": "# tharun977-portfolio-2\nPortfolio website for Tharun Raman - Generated with DevForge\n"
  },
  {
    "id": 1006397721,
    "node_id": "R_kgDOO_xpGQ",
    "name": "tharun977-portfolio-1",
    "full_name": "tharun977/tharun977-portfolio-1",
    "private": false,
    "owner": {
      "login": "tharun977",
      "id": 116884536,
      "node_id": "U_kgDOBveEOA",
      "avatar_url": "https://avatars.githubusercontent.com/u/116884536?v=4",
      "gravatar_id": "",
      "url": "https://api.github.com/users/tharun977",
      "html_url": "https://github.com/tharun977",
      "followers_url": "https://api.github.com/users/tharun977/followers",
      "following_url": "https://api.github.com/users/tharun977/following{/other_user}",
      "gists_url": "https://api.github.com/users/tharun977/gists{/gist_id}",
      "starred_url": "https://api.github.com/users/tharun977/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/tharun977/subscriptions",
      "organizations_url": "https://api.github.com/users/tharun977/orgs",
      "repos_url": "https://api.github.com/users/tharun977/repos",
      "events_url": "https://api.github.com/users/tharun977/events{/privacy}",
      "received_events_url": "https://api.github.com/users/tharun977/received_events",
      "type": "User",
      "user_view_type": "public",
      "site_admin": false
    },
    "html_url": "https://github.com/tharun977/tharun977-portfolio-1",
    "description": "Portfolio website for Tharun Raman - Generated with DevForge",
    "fork": false,
    "url": "https://api.github.com/repos/tharun977/tharun977-portfolio-1",
    "forks_url": "https://api.github.com/repos/tharun977/tharun977-portfolio-1/forks",
    "keys_url": "https://api.github.com/repos/tharun977/tharun977-portfolio-1/keys{/key_id}",
    "collaborators_url": "https://api.github.com/repos/tharun977/tharun977-portfolio-1/collaborators{/collaborator}",
    "teams_url": "https://api.github.com/repos/tharun977/tharun977-portfolio-1/teams",
    "hooks_url": "https://api.github.com/repos/tharun977/tharun977-portfolio-1/hooks",
    "issue_events_url": "https://api.github.com/repos/tharun977/tharun977-portfolio-1/issues/events{/number}",
    "events_url": "https://api.github.com/repos/tharun977/tharun977-portfolio-1/events",
    "assignees_url": "https://api.github.com/repos/tharun977/tharun977-portfolio-1/assignees{/user}",
    "branches_url": "https://api.github.com/repos/tharun977/tharun977-portfolio-1/branches{/branch}",
    "tags_url": "https://api.github.com/repos/tharun977/tharun977-portfolio-1/tags",
    "blobs_url": "https://api.github.com/repos/tharun977/tharun977-portfolio-1/git/blobs{/sha}",
    "git_tags_url": "https://api.github.com/repos/tharun977/tharun977-portfolio-1/git/tags{/sha}",
    "git_refs_url": "https://api.github.com/repos/tharun977/tharun977-portfolio-1/git/refs{/sha}",
    "trees_url": "https://api.github.com/repos/tharun977/tharun977-portfolio-1/git/trees{/sha}",
    "statuses_url": "https://api.github.com/repos/tharun977/tharun977-portfolio-1/statuses/{sha}",
    "languages_url": "https://api.github.com/repos/tharun977/tharun977-portfolio-1/languages",
    "stargazers_url": "https://api.github.com/repos/tharun977/tharun977-portfolio-1/stargazers",
    "contributors_url": "https://api.github.com/repos/tharun977/tharun977-portfolio-1/contributors",
    "subscribers_url": "https://api.github.com/repos/tharun977/tharun977-portfolio-1/subscribers",
    "subscription_url": "https://api.github.com/repos/tharun977/tharun977-portfolio-1/subscription",
    "commits_url": "https://api.github.com/repos/tharun977/tharun977-portfolio-1/commits{/sha}",
    "git_commits_url": "https://api.github.com/repos/tharun977/tharun977-portfolio-1/git/commits{/sha}",
    "comments_url": "https://api.github.com/repos/tharun977/tharun977-portfolio-1/comments{/number}",
    "issue_comment_url": "https://api.github.com/repos/tharun977/tharun977-portfolio-1/issues/comments{/number}",
    "contents_url": "https://api.github.com/repos/tharun977/tharun977-portfolio-1/contents/{+path}",
    "compare_url": "https://api.github.com/repos/tharun977/tharun977-portfolio-1/compare/{base}...{head}",
    "merges_url": "https://api.github.com/repos/tharun977/tharun977-portfolio-1/merges",
    "archive_url": "https://api.github.com/repos/tharun977/tharun977-portfolio-1/{archive_format}{/ref}",
    "downloads_url": "https://api.github.com/repos/tharun977/tharun977-portfolio-1/downloads",
    "issues_url": "https://api.github.com/repos/tharun977/tharun977-portfolio-1/issues{/number}",
    "pulls_url": "https://api.github.com/repos/tharun977/tharun977-portfolio-1/pulls{/number}",
    "milestones_url": "https://api.github.com/repos/tharun977/tharun977-portfolio-1/milestones{/number}",
    "notifications_url": "https://api.github.com/repos/tharun977/tharun977-portfolio-1/notifications{?since,all,participating}",
    "labels_url": "https://api.github.com/repos/tharun977/tharun977-portfolio-1/labels{/name}",
    "releases_url": "https://api.github.com/repos/tharun977/tharun977-portfolio-1/releases{/id}",
    "deployments_url": "https://api.github.com/repos/tharun977/tharun977-portfolio-1/deployments",
    "created_at": "2025-06-22T07:09:37Z",
    "updated_at": "2025-06-22T07:09:40Z",
    "pushed_at": "2025-06-22T07:09:37Z",
    "git_url": "git://github.com/tharun977/tharun977-portfolio-1.git",
    "ssh_url": "git@github.com:tharun977/tharun977-portfolio-1.git",
    "clone_url": "https://github.com/tharun977/tharun977-portfolio-1.git",
    "svn_url": "https://github.com/tharun977/tharun977-portfolio-1",
    "homepage": null,
    "size": 0,
    "stargazers_count": 0,
    "watchers_count": 0,
    "language": null,
    "has_issues": true,
    "has_projects": true,
    "has_downloads": true,
    "has_wiki": true,
    "has_pages": false,
    "has_discussions": false,
    "forks_count": 0,
    "mirror_url": null,
    "archived": false,
    "disabled": false,
    "open_issues_count": 0,
    "license": null,
    "allow_forking": true,
    "is_template": false,
    "web_commit_signoff_required": false,
    "topics": [],
    "visibility": "public",
    "forks": 0,
    "open_issues": 0,
    "watchers": 0,
    "default_branch": "main",
    "permissions": {
      "admin": true,
      "maintain": true,
      "push": true,
      "triage": true,
      "pull": true
    },
    "readme": "# tharun977-portfolio-1\nPortfolio website for Tharun Raman - Generated with DevForge\n"
  }
]
  const skills = [
  "Python",
  "JavaScript",
  "TypeScript",
  "HTML",
  "bootstrap5",
  "django",
  "django-application",
  "sqlite3"
]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-slate-800">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <Avatar className="w-32 h-32 mx-auto mb-6 border-4 border-white shadow-lg">
              <AvatarImage src={user.avatar_url || "/placeholder.svg"} alt={user.name || user.login} />
              <AvatarFallback className="text-2xl">{(user.name || user.login).charAt(0)}</AvatarFallback>
            </Avatar>

            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4">
              {user.name || user.login}
            </h1>

            {user.bio && (
              <p className="text-xl text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
                {user.bio}
              </p>
            )}

            <div className="flex flex-wrap gap-4 justify-center mb-8 text-sm text-gray-600 dark:text-gray-400">
              {user.location && (
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  {user.location}
                </div>
              )}
              {user.company && (
                <div className="flex items-center gap-2">
                  <Building className="w-4 h-4" />
                  {user.company}
                </div>
              )}
              {user.email && (
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  {user.email}
                </div>
              )}
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                Joined {new Date(user.created_at).toLocaleDateString('en-US', { 
                  year: 'numeric', 
                  month: 'long' 
                })}
              </div>
            </div>

            <div className="flex gap-4 justify-center">
              <Button
                variant="outline"
                className="bg-white/80 backdrop-blur-sm border-gray-200 hover:bg-white"
                onClick={() => window.open(user.html_url, "_blank")}
              >
                <Github className="w-4 h-4 mr-2" />
                GitHub Profile
              </Button>
              {user.blog && (
                <Button 
                  className="bg-blue-600 hover:bg-blue-700"
                  onClick={() => window.open(user.blog, "_blank")}
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Website
                </Button>
              )}
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-2xl mx-auto">
            <Card className="bg-white/80 backdrop-blur-sm border-gray-200">
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-gray-900 mb-1">{user.public_repos}</div>
                <div className="text-gray-600 text-sm flex items-center justify-center gap-1">
                  <BookOpen className="w-4 h-4" />
                  Repositories
                </div>
              </CardContent>
            </Card>
            <Card className="bg-white/80 backdrop-blur-sm border-gray-200">
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-gray-900 mb-1">{user.followers}</div>
                <div className="text-gray-600 text-sm flex items-center justify-center gap-1">
                  <Users className="w-4 h-4" />
                  Followers
                </div>
              </CardContent>
            </Card>
            <Card className="bg-white/80 backdrop-blur-sm border-gray-200">
              <CardContent className="p-6 text-center">
                <div className="text-3xl font-bold text-gray-900 mb-1">{user.following}</div>
                <div className="text-gray-600 text-sm flex items-center justify-center gap-1">
                  <Users className="w-4 h-4" />
                  Following
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      {skills.length > 0 && (
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
              Technologies & Skills
            </h2>
            <div className="flex flex-wrap gap-3 justify-center">
              {skills.map((skill, index) => (
                <Badge 
                  key={index} 
                  variant="secondary" 
                  className="bg-white/80 backdrop-blur-sm border-gray-200 text-gray-700 hover:bg-white"
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Projects Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12 text-center">
            Featured Projects
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {repos.map((repo) => (
              <Card 
                key={repo.id} 
                className="bg-white/80 backdrop-blur-sm border-gray-200 hover:bg-white hover:shadow-lg transition-all duration-300 group"
              >
                <CardHeader className="pb-3">
                  <div className="flex items-start justify-between">
                    <CardTitle className="text-gray-900 text-lg group-hover:text-blue-600 transition-colors">
                      {repo.name}
                    </CardTitle>
                    <div className="flex gap-2">
                      {repo.homepage && (
                        <Button
                          variant="ghost"
                          size="sm"
                          className="text-gray-400 hover:text-gray-600 p-1"
                          onClick={() => window.open(repo.homepage, "_blank")}
                        >
                          <ExternalLink className="w-4 h-4" />
                        </Button>
                      )}
                      <Button
                        variant="ghost"
                        size="sm"
                        className="text-gray-400 hover:text-gray-600 p-1"
                        onClick={() => window.open(repo.html_url, "_blank")}
                      >
                        <Github className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                    {repo.description || "No description available"}
                  </p>

                  <div className="flex items-center gap-4 mb-4 text-sm text-gray-500">
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4" />
                      {repo.stargazers_count}
                    </div>
                    <div className="flex items-center gap-1">
                      <GitFork className="w-4 h-4" />
                      {repo.forks_count}
                    </div>
                    {repo.language && (
                      <Badge variant="outline" className="text-xs bg-blue-50 border-blue-200 text-blue-700">
                        {repo.language}
                      </Badge>
                    )}
                  </div>

                  {repo.topics && repo.topics.length > 0 && (
                    <div className="flex flex-wrap gap-1">
                      {repo.topics.slice(0, 4).map((topic) => (
                        <Badge
                          key={topic}
                          variant="outline"
                          className="text-xs bg-gray-50 border-gray-200 text-gray-600"
                        >
                          {topic}
                        </Badge>
                      ))}
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 sm:px-6 lg:px-8 border-t border-gray-200 bg-white/50 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-600">
            Built with ❤️ using DevForge Portfolio Generator
          </p>
          <p className="text-gray-500 text-sm mt-2">
            Last updated: {new Date().toLocaleDateString()}
          </p>
        </div>
      </footer>
    </div>
  )
}