import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { ChevronDown, ChevronUp } from 'lucide-react'

const faqData = [
  {
    id: 1,
    question: "Quanto tempo demora para receber o salário maternidade?",
    answer: "O prazo médio é de 30 a 45 dias após o protocolo do pedido no INSS. Com nossa assessoria, acompanhamos todo o processo e garantimos que não haja atrasos desnecessários."
  },
  {
    id: 2,
    question: "Qual o valor do salário maternidade?",
    answer: "O valor varia conforme sua categoria: empregadas CLT recebem o salário integral, MEI e autônomas recebem conforme suas contribuições (mínimo de um salário mínimo), e desempregadas recebem um salário mínimo."
  },
  {
    id: 3,
    question: "Posso receber salário maternidade estando desempregada?",
    answer: "Sim! Desde que você mantenha a qualidade de segurada e tenha pelo menos 10 meses de contribuição. Nossa assessoria verifica todos os requisitos para seu caso específico."
  },
  {
    id: 4,
    question: "O que acontece se meu pedido for negado?",
    answer: "Oferecemos suporte completo para recursos e revisões. Analisamos os motivos da negativa e entramos com recurso administrativo ou judicial, se necessário."
  },
  {
    id: 5,
    question: "Quanto custa a assessoria?",
    answer: "A consulta inicial é gratuita! Nossos honorários são transparentes e só cobramos em caso de sucesso na obtenção do benefício. Entre em contato para conhecer nossas condições."
  },
  {
    id: 6,
    question: "Preciso ir ao INSS pessoalmente?",
    answer: "Na maioria dos casos, não! Fazemos todo o processo online. Apenas em situações específicas pode ser necessário comparecer a uma agência, e te orientamos sobre isso."
  },
  {
    id: 7,
    question: "Posso solicitar o salário maternidade antes do parto?",
    answer: "Sim! Você pode solicitar a partir de 28 dias antes da data prevista do parto. Isso garante que você receba o benefício desde o início da licença."
  },
  {
    id: 8,
    question: "O salário maternidade é pago por quantos meses?",
    answer: "O benefício é pago por 120 dias (4 meses) na maioria dos casos. Em situações especiais, como nascimento prematuro ou complicações, o período pode ser estendido."
  }
]

export function FAQ() {
  const [openItems, setOpenItems] = useState(new Set())

  const toggleItem = (id) => {
    const newOpenItems = new Set(openItems)
    if (newOpenItems.has(id)) {
      newOpenItems.delete(id)
    } else {
      newOpenItems.add(id)
    }
    setOpenItems(newOpenItems)
  }

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Perguntas Frequentes</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Esclarecemos as principais dúvidas sobre salário maternidade e nossa assessoria
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto space-y-4">
          {faqData.map((item) => (
            <Card key={item.id} className="hover:shadow-lg transition-shadow">
              <CardHeader 
                className="cursor-pointer"
                onClick={() => toggleItem(item.id)}
              >
                <CardTitle className="flex items-center justify-between text-lg">
                  <span className="text-gray-800">{item.question}</span>
                  {openItems.has(item.id) ? (
                    <ChevronUp className="h-5 w-5 text-pink-500" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-pink-500" />
                  )}
                </CardTitle>
              </CardHeader>
              {openItems.has(item.id) && (
                <CardContent className="pt-0">
                  <p className="text-gray-600 leading-relaxed">{item.answer}</p>
                </CardContent>
              )}
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">Não encontrou a resposta que procurava?</p>
          <button 
            onClick={() => document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' })}
            className="text-pink-500 hover:text-pink-600 font-semibold underline"
          >
            Entre em contato conosco
          </button>
        </div>
      </div>
    </section>
  )
}

