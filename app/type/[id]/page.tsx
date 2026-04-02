import SnobbyCoverTypePageClient from "@/components/SnobbyCoverTypePageClient";

const IDS = ["a", "b", "c", "d", "e", "f", "g", "h"] as const;

export function generateStaticParams() {
  return IDS.map((id) => ({ id }));
}

type Props = { params: Promise<{ id: string }> };

export default async function SnobbyCoverTypePage({ params }: Props) {
  const { id } = await params;
  return <SnobbyCoverTypePageClient typeId={id} />;
}
