"""Simple application used in the artifact pipeline lab."""

from pathlib import Path

APP_NAME = "artifact-pipeline"
APP_VERSION = "1.0.0"


def get_version() -> str:
    return APP_VERSION


def build() -> None:
    """Create dist/version.txt for the CI artifact pipeline."""
    dist = Path("dist")
    dist.mkdir(parents=True, exist_ok=True)
    (dist / "version.txt").write_text(f"{APP_VERSION}\n")


def main() -> None:
    print(f"{APP_NAME} v{get_version()}")


if __name__ == "__main__":
    main()
