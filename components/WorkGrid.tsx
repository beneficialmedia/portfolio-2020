import type { WorkFrontmatter } from "@/lib/work";
import { WorkCard } from "./WorkCard";

type Props = {
  items: WorkFrontmatter[];
};

export function WorkGrid({ items }: Props) {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
      {items.map((work, i) => (
        <WorkCard key={work.slug} work={work} index={i} />
      ))}
    </div>
  );
}
