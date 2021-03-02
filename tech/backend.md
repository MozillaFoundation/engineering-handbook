# Backend technologies used in our repos

## foundation.mozilla.org and mozillafestival.org

- [Docker](https://www.docker.com/) for abstraction as a replacement for virtual environments
- [Invoke](http://www.pyinvoke.org/) for managing tasks inside of Docker
- [Python](https://www.python.org/) as the preferred backend language
- [Django Web Framework](https://www.djangoproject.com/) as the backend framework. Django is installed when you run the Invoke command: `inv new-env`.
- [Wagtail CMS](https://wagtail.io/) as the content management system. Wagtail is installed when you run the Invoke command: `inv new-env`
