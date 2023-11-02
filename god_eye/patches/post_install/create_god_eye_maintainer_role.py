import frappe
import click

role_name = "God's Eye Maintainer"


def execute():
    # Check if the role exists
    if len(frappe.get_all("Role", filters={"name": role_name})) == 0:

        role = frappe.new_doc("Role")
        role.role_name = role_name
        role.desk_access = 1
        role.insert(ignore_permissions=True)

        click.secho(f"Created New Role: {role_name}", fg="green")
    else:
        click.secho(f"Role '{role_name}' Already Available", fg="yellow")