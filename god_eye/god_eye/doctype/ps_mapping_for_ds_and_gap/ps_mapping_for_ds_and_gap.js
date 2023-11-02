// Copyright (c) 2023, Improwised Technologies Pvt. Ltd. and contributors
// For license information, please see license.txt

frappe.ui.form.on('PS Mapping for DS and GAP', {
	// refresh: function(frm) {

	// }
	onload: function(frm) {
		if(frm.doc.ps) {
			frappe.call({
				method: 'god_eye.god_eye.doctype.ps_mapping_for_ds_and_gap.ps_mapping_for_ds_and_gap.get_employee_name',
				args: {
					emp_id: frm.doc.ps
				},
				callback: function(r) {
					frm.set_value('ps_name', r.message);
				}
			});
		}
	},

	refresh: function(frm) {
		if(frm.doc.ps) {
			frappe.call({
				method: 'god_eye.god_eye.doctype.ps_mapping_for_ds_and_gap.ps_mapping_for_ds_and_gap.get_employee_name',
				args: {
					emp_id: frm.doc.ps
				},
				callback: function(r) {
					frm.set_value('ps_name', r.message);
				}
			});
		}
	},

	ps: function(frm) {
		frappe.call({
			method: 'god_eye.god_eye.doctype.ps_mapping_for_ds_and_gap.ps_mapping_for_ds_and_gap.get_employee_name',
			args: {
				emp_id: frm.doc.ps
			},
			callback: function(r) {
				frm.set_value('ps_name', r.message);
			}
		});
	}
 });
