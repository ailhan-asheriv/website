import SectionHeader from "./SectionHeader";

export interface StakeholderCard {
  title: string;
  description: string;
}

export interface StakeholderCardsProps {
  title: string;
  intro: string;
  cards: StakeholderCard[];
}

export default function StakeholderCards({ title, intro, cards }: StakeholderCardsProps) {
  return (
    <>
      <SectionHeader title={title} accent align="center" lead={<p>{intro}</p>} />
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {cards.map((card, i) => (
          <div key={i} className="card-elevated p-6">
            <h3 className="font-semibold text-white mb-2">{card.title}</h3>
            <p className="text-muted text-sm leading-relaxed">{card.description}</p>
          </div>
        ))}
      </div>
    </>
  );
}
