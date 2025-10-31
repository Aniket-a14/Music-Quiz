import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const FAQItems = [
  {
    question: "How long does each quiz take?",
    answer:
      "Each quiz contains 10 questions and typically takes 5-10 minutes depending on how quickly you can identify the songs.",
  },
  {
    question: "Can I replay the audio preview?",
    answer:
      "Yes! You can click the play button multiple times to listen to the preview again. This helps you better identify the song.",
  },
  {
    question: "What genres of music are included?",
    answer:
      "Our quiz features a diverse collection including Pop, Rock, Hip-Hop, Jazz, Classical, Electronic, Country, and more from different decades.",
  },
  {
    question: "Is there a leaderboard or scoring system?",
    answer:
      "Yes! Your score is calculated based on the number of correct answers. We track your progress and accuracy percentage throughout the quiz.",
  },
  {
    question: "Can I try the quiz multiple times?",
    answer:
      "You can retake the quiz as many times as you want. Questions will be randomized or varied to keep it fresh.",
  },
  {
    question: "Do I need an account to play?",
    answer:
      "For now, you can play without creating an account. However, creating an account allows you to track your progress and compete with friends.",
  },
]

export default function FAQ() {
  return (
    <section id="faq" className="w-full py-20 sm:py-32 px-4 sm:px-6 lg:px-8 bg-card/30">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">Frequently Asked Questions</h2>
          <p className="text-lg text-muted-foreground">Everything you need to know about SongMatch</p>
        </div>

        <Accordion type="single" collapsible className="w-full space-y-4">
          {FAQItems.map((item, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="border border-border/50 rounded-lg px-6 data-[state=open]:bg-card/50 transition-colors"
            >
              <AccordionTrigger className="text-lg font-semibold text-foreground hover:text-primary transition-colors py-4">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-4">{item.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
