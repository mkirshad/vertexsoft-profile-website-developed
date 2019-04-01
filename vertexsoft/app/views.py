"""
Definition of views.
"""

from django.shortcuts import render
from django.http import HttpRequest
from django.template import RequestContext
from datetime import datetime

def home(request):
    """Renders the home page."""
    assert isinstance(request, HttpRequest)
    return render(
        request,
        'app/index.html',
        {
            'title':'Home Page',
            'year':datetime.now().year,
        }
    )

def blog(request):
    """Renders the home page."""
    assert isinstance(request, HttpRequest)
    return render(
        request,
        'app/blog.html',
        {
            'title':'Home Page',
            'year':datetime.now().year,
        }
    )

def blog_pen_of_cto_duty_vs_making_money(request):
    """Renders the home page."""
    assert isinstance(request, HttpRequest)
    return render(
        request,
        'app/blog_pen_of_cto_duty_vs_making_money.html',
        {
            'title':'Home Page',
            'year':datetime.now().year,
        }
    )

def blog_technology_about_python(request):
    """Renders the home page."""
    assert isinstance(request, HttpRequest)
    return render(
        request,
        'app/about_python.html',
        {
            'title':'Home Page',
            'year':datetime.now().year,
        }
    )
	
def blog_technology_about_django(request):
    """Renders the home page."""
    assert isinstance(request, HttpRequest)
    return render(
        request,
        'app/about_django.html',
        {
            'title':'Home Page',
            'year':datetime.now().year,
        }
    )

def contact(request):
    """Renders the contact page."""
    assert isinstance(request, HttpRequest)
    return render(
        request,
        'app/contact.html',
        {
            'title':'Contact',
            'message':'Your contact page.',
            'year':datetime.now().year,
        }
    )

def about(request):
    """Renders the about page."""
    assert isinstance(request, HttpRequest)
    return render(
        request,
        'app/about.html',
        {
            'title':'About',
            'message':'Your application description page.',
            'year':datetime.now().year,
        }
    )

def key1(request):
    """Renders the home page."""
    assert isinstance(request, HttpRequest)
    return render(
        request,
        'app/8DRUUDFC56WoAcrdKfXQqjFdQ3bPKUuSPMs6RDElw-g',
        {
            'title':'Home Page',
            'year':datetime.now().year,
        }
    )

def key2(request):
    """Renders the home page."""
    assert isinstance(request, HttpRequest)
    return render(
        request,
        'app/jMK7_1NA53BuZrouaet2fufEzSjzoaocLVWTOVLaKdk',
        {
            'title':'Home Page',
            'year':datetime.now().year,
        }
    )

def ror_xml(request):
    """Renders the home page."""
    assert isinstance(request, HttpRequest)
    return render(
        request,
        'app/ror.xml',
        {
            'title':'Home Page',
            'year':datetime.now().year,
        }
    )
def sitemap_html(request):
    """Renders the home page."""
    assert isinstance(request, HttpRequest)
    return render(
        request,
        'app/sitemap.html',
        {
            'title':'Home Page',
            'year':datetime.now().year,
        }
    )
def sitemap_xml(request):
    """Renders the home page."""
    assert isinstance(request, HttpRequest)
    return render(
        request,
        'app/sitemap.xml',
        {
            'title':'Home Page',
            'year':datetime.now().year,
        }
    )
def sitemap_xml_gz(request):
    """Renders the home page."""
    assert isinstance(request, HttpRequest)
    return render(
        request,
        'app/sitemap.xml.gz',
        {
            'title':'Home Page',
            'year':datetime.now().year,
        }
    )
def urllist_txt(request):
    """Renders the home page."""
    assert isinstance(request, HttpRequest)
    return render(
        request,
        'app/urllist.txt',
        {
            'title':'Home Page',
            'year':datetime.now().year,
        }
    )

def blog_labour_day(request):
    """Renders the home page."""
    assert isinstance(request, HttpRequest)
    return render(
        request,
        'app/blog_labour_day.html',
        {
            'title':'Home Page',
            'year':datetime.now().year,
        }
    )

