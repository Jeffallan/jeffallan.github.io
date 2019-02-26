#!/usr/bin/env python
# -*- coding: utf-8 -*- #
from __future__ import unicode_literals

AUTHOR = 'Jeff Smolinski'
SITENAME = "Jeff's Cover Letter"
SITEURL = 'https://jeffallan.github.io' #http://localhost:8000
# deploy
# ghp-import -p -b master -r https://github.com/Jeffallan/jeffallan.github.io.git output/
PATH = 'content'

TIMEZONE = 'America Chicago'

DEFAULT_LANG = 'en'


# FormSpree

# Formspree Setup
# 
# <form action="https://formspree.io/your@email.com" method="POST">
#   <input type="text" name="name">
#   <input type="email" name="_replyto">
#   <input type="submit" value="Send">
# </form>
# 

FORMSPREELINK = 'https://formspree.io/smolinskija@gmail.com'

# Blogroll
LINKS = (('Pelican', 'http://getpelican.com/'),
         ('Python.org', 'http://python.org/'),
         ('Jinja2', 'http://jinja.pocoo.org/'),
         ('You can modify those links in your config file', '#'),)

# Social widget
SOCIAL = (('You can add links in your config file', '#'),
          ('Another social link', '#'),)

DEFAULT_PAGINATION = False

# Uncomment following line if you want document-relative URLs when developing
RELATIVE_URLS = True

ABOUT_ME = """I am a self taught software developer with four years of experience who primarily writes in Python and Javascript.  I particularly enjoy developing with Scrapy, Django and Vue JS.
The thing I love most about software development is finding those things that take a ton of manual effort and automating them.\n\n  
I am currently a graduate IT student at the University of Nebraska at Omaha whose field of study is Cybersecurity.  
I am looking for a role where I can practice or implement secure development strategies and learn from more experienced team members.      

"""

HIGHLIGHTS = ('Authored a web scraper, using Scrapy, that yielded hundreds of thousands of lines of business contact data; saving hours of manual prospecting time.',
'Wrote a Python script that automated a Big Commerce site\'s monthly upgrades of hunderds of products; saving numerous hours of manual upgrades.',
'Deployed a Python package that performs calculations for fitness professionals.  With the help of this software I was able to effectively manage numerous individual\'s \
diet exercise programs and helping them lose an average of 3% body fat in the first month.  This software decreased my preperation time from approximately two hours per month per client \
to one hour per month per client',)

INTERESTS = (('Co-organizer, Omaha Python User Group. ', 'The Omaha Python User Group is a local Meetup dedicated to the Python language.  Members present on various topics and participate in group project.'), 
('Active member, Nullify. ', 'Nullify is the University of Nebraska at Omaha\'s Cybersecurity club.  The purpose of this club is to discuss electronic security topics and participate in capture the flag competitions.'), 
('Avid martial artist. ', 'I currently train at Omaha Kali which teaches Brazilian Jiu Jitsu, Muay Thai, the Filipino Martial Arts, and Jeet Kune Do.'),)

PROJECTS = (( 'https://pypi.org/project/fitness-tools/','Fitness Tools' ),)

PRESENTATIONS = (('https://github.com/Jeffallan/Python-3-Magic-Methods', 'Python 3 Magic Methods'),)