"""
Definition of urls for vertexsoft.
"""

from datetime import datetime
from django.conf.urls import url
import django.contrib.auth.views

import app.forms
import app.views

# Uncomment the next lines to enable the admin:
# from django.conf.urls import include
# from django.contrib import admin
# admin.autodiscover()

urlpatterns = [
    # Examples:
    url(r'^$', app.views.home, name='home'),
    url(r'^blog$', app.views.blog, name='blog'),
    url(r'^blog/technology/about_python', app.views.blog_technology_about_python, name='blog_technology_about_python'),
	url(r'^blog/technology/about_django', app.views.blog_technology_about_django, name='blog_technology_about_django'),
    url(r'^blog/pen_of_cto/duty_vs_making_money$', app.views.blog_pen_of_cto_duty_vs_making_money, name='blog_pen_of_cto_duty_vs_making_money'),
    url(r'^.well-known/acme-challenge/8DRUUDFC56WoAcrdKfXQqjFdQ3bPKUuSPMs6RDElw-g$', app.views.key1, name='key1'),
    url(r'^.well-known/acme-challenge/jMK7_1NA53BuZrouaet2fufEzSjzoaocLVWTOVLaKdk$', app.views.key2, name='key2'),
	url(r'^sitemap.html', app.views.sitemap_html, name='sitemap_html'),
	url(r'^sitemap.xml', app.views.sitemap_xml, name='sitemap_xml'),
	url(r'^ror.xml', app.views.ror_xml, name='ror_xml'),
	url(r'^urllist.txt', app.views.urllist_txt, name='urllist_txt'),
	url(r'^sitemap.xml.gz', app.views.sitemap_xml_gz, name='sitemap_xml_gz'),
    url(r'^contact$', app.views.contact, name='contact'),
    url(r'^about$', app.views.about, name='about'),
    url(r'^login/$',
        django.contrib.auth.views.login,
        {
            'template_name': 'app/login.html',
            'authentication_form': app.forms.BootstrapAuthenticationForm,
            'extra_context':
            {
                'title': 'Log in',
                'year': datetime.now().year,
            }
        },
        name='login'),
    url(r'^logout$',
        django.contrib.auth.views.logout,
        {
            'next_page': '/',
        },
        name='logout'),

    # Uncomment the admin/doc line below to enable admin documentation:
    # url(r'^admin/doc/', include('django.contrib.admindocs.urls')),

    # Uncomment the next line to enable the admin:
    # url(r'^admin/', include(admin.site.urls)),
]
