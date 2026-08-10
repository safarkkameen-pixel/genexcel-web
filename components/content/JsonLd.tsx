type JsonLdProps = {
  data: object;
};

/** Renders a JSON-LD `<script>` tag. Server Component — no client cost. */
export function JsonLd({ data }: JsonLdProps) {
  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
  );
}
