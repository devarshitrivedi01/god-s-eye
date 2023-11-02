// Copyright (c) 2023, Improwised Technologies Pvt. Ltd. and contributors
// For license information, please see license.txt

frappe.ui.form.on('Employee List for DS and GAP', {
	// refresh: function(frm) {
	// 	if (frm.doc.employee) {
	// 		frappe.call({
	// 			method: 'god_eye.god_eye.doctype.ps_mapping_for_ds_and_gap.ps_mapping_for_ds_and_gap.get_employee_name',
	// 			args: {
	// 				emp_id: frm.doc.employee
	// 			},
	// 			callback: function(r) {
	// 				frm.set_value('employee_name', r.message);
	// 			}
	// 		});
	// 	}
	// },

	// employee: function(frm) {
	// 	console.log("kldanfjadknfoidaasdasd")
	// 	frappe.call({
	// 		method: 'god_eye.god_eye.doctype.ps_mapping_for_ds_and_gap.ps_mapping_for_ds_and_gap.get_employee_name',
	// 		args: {
	// 			emp_id: frm.doc.employee
	// 		},
	// 		callback: function(r) {
	// 			frm.set_value('employee_name', r.message);
	// 		}
	// 	});
	// }
});
