import frappe


def after_install():
    run_post_install_patches()


def run_post_install_patches():
    print("\nPatching Existing Data...")

    POST_INSTALL_PATCHES = get_post_install_patches()
    frappe.flags.in_patch = True

    try:
        for patch in POST_INSTALL_PATCHES:
            patch_name = patch.split(".")[-1]
            if not patch_name:
                continue

            frappe.get_attr(
                f"god_eye.patches.post_install.{patch_name}.execute")()
    finally:
        frappe.flags.in_patch = False


def get_post_install_patches():
    return (
        
    )