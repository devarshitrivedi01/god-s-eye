from setuptools import setup, find_packages

with open("requirements.txt") as f:
	install_requires = f.read().strip().split("\n")

# get version from __version__ variable in god_eye/__init__.py
from god_eye import __version__ as version

setup(
	name="god_eye",
	version=version,
	description="A gap analysis and MOM app",
	author="Improwised Technologies Pvt. Ltd.",
	author_email="devarshi.trivedi@improwised.com",
	packages=find_packages(),
	zip_safe=False,
	include_package_data=True,
	install_requires=install_requires
)
