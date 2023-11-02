# Copyright (c) 2023, Improwised Technologies Pvt. Ltd. and contributors
# For license information, please see license.txt

import frappe
from frappe.model.document import Document


class PSMappingforDSandGAP(Document):
	pass


@frappe.whitelist()
def get_employee_name(emp_id):
	emp_name = frappe.db.get_value(
        "Employee",
        {
            "name": emp_id,
        },
        "employee_name"
    )
	return emp_name
