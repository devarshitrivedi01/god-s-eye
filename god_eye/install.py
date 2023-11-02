import click
from god_eye.setup import after_install as setup


def after_install():
    try:
        print("Setting up God's Eye ...")
        setup()
        click.secho("Thank you for installing God's Eye!", fg="green")

    except Exception as e:
        click.secho(
            "Installation for God's Eye app failed due to an error."
            " Please try re-installing the app",
            fg="bright_red",
        )
        raise e