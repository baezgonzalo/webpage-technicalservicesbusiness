"""Check that local HTML pages link only to existing site files."""
from html.parser import HTMLParser
from pathlib import Path
from urllib.parse import unquote, urlsplit

ROOT = Path(__file__).resolve().parent
PAGES = sorted(ROOT.rglob("index.html"))

class LinkParser(HTMLParser):
    def __init__(self):
        super().__init__()
        self.links = []
        self.h1_count = 0

    def handle_starttag(self, tag, attrs):
        attrs = dict(attrs)
        if tag == "h1":
            self.h1_count += 1
        for key in ("href", "src"):
            if key in attrs:
                self.links.append((tag, key, attrs[key]))

errors = []
for page in PAGES:
    parser = LinkParser()
    parser.feed(page.read_text(encoding="utf-8"))
    if parser.h1_count != 1:
        errors.append(f"{page.relative_to(ROOT)}: {parser.h1_count} H1 headings")
    for tag, key, value in parser.links:
        parts = urlsplit(value)
        if tag == "a" and parts.netloc == "www.heloutechnicalservices.com":
            errors.append(f"{page.relative_to(ROOT)}: external HTS link: {value}")
        if parts.scheme or parts.netloc or value.startswith("#"):
            continue
        local = (page.parent / unquote(parts.path)).resolve()
        if not local.is_file():
            errors.append(f"{page.relative_to(ROOT)}: missing {key}: {value}")

if errors:
    print("\n".join(errors))
    raise SystemExit(1)
print(f"Checked {len(PAGES)} pages: all local links and assets exist; one H1 per page.")
