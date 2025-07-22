import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Button } from '@/components/ui/button.jsx'
import { Input } from '@/components/ui/input.jsx'
import { Label } from '@/components/ui/label.jsx'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select.jsx'
import { Calculator as CalculatorIcon, DollarSign, Info } from 'lucide-react'

export function Calculator() {
  const [formData, setFormData] = useState({
    categoria: '',
    salario: '',
    tempoContribuicao: ''
  })
  const [resultado, setResultado] = useState(null)

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }))
  }

  const calcularBeneficio = () => {
    const salarioMinimo = 1518 // Valor de 2025
    let valorBeneficio = 0
    let observacoes = []

    switch (formData.categoria) {
      case 'clt':
        valorBeneficio = Math.max(parseFloat(formData.salario) || salarioMinimo, salarioMinimo)
        observacoes.push('Empregadas CLT recebem o salário integral')
        observacoes.push('Benefício pago por 120 dias')
        break
      
      case 'mei':
        if (parseInt(formData.tempoContribuicao) >= 10) {
          valorBeneficio = salarioMinimo
          observacoes.push('MEI com carência completa recebe um salário mínimo')
          observacoes.push('Benefício pago por 120 dias')
        } else {
          observacoes.push('Necessário pelo menos 10 meses de contribuição')
          observacoes.push('Entre em contato para verificar sua situação')
        }
        break
      
      case 'autonoma':
        if (parseInt(formData.tempoContribuicao) >= 10) {
          const salarioContribuicao = parseFloat(formData.salario) || salarioMinimo
          valorBeneficio = Math.max(salarioContribuicao, salarioMinimo)
          observacoes.push('Valor baseado na média das contribuições')
          observacoes.push('Benefício pago por 120 dias')
        } else {
          observacoes.push('Necessário pelo menos 10 meses de contribuição')
          observacoes.push('Entre em contato para verificar sua situação')
        }
        break
      
      case 'desempregada':
        if (parseInt(formData.tempoContribuicao) >= 10) {
          valorBeneficio = salarioMinimo
          observacoes.push('Desempregadas com qualidade de segurada recebem um salário mínimo')
          observacoes.push('Benefício pago por 120 dias')
        } else {
          observacoes.push('Necessário pelo menos 10 meses de contribuição')
          observacoes.push('Verificar se mantém qualidade de segurada')
        }
        break
      
      case 'domestica':
        valorBeneficio = Math.max(parseFloat(formData.salario) || salarioMinimo, salarioMinimo)
        observacoes.push('Empregadas domésticas recebem o último salário')
        observacoes.push('Benefício pago por 120 dias')
        break
      
      default:
        observacoes.push('Selecione uma categoria para calcular')
    }

    setResultado({
      valorMensal: valorBeneficio,
      valorTotal: valorBeneficio * 4, // 4 meses
      observacoes
    })
  }

  const isFormValid = formData.categoria && (formData.categoria === 'clt' || formData.categoria === 'domestica' || formData.tempoContribuicao)

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Calculadora de Benefícios</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Faça uma estimativa do valor do seu salário maternidade
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <CalculatorIcon className="h-6 w-6 text-pink-500" />
                  <span>Calcule seu Benefício</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="categoria">Sua Situação Atual</Label>
                  <Select value={formData.categoria} onValueChange={(value) => handleInputChange('categoria', value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Selecione sua categoria" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="clt">Empregada CLT</SelectItem>
                      <SelectItem value="mei">MEI</SelectItem>
                      <SelectItem value="autonoma">Autônoma</SelectItem>
                      <SelectItem value="desempregada">Desempregada</SelectItem>
                      <SelectItem value="domestica">Empregada Doméstica</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {(formData.categoria === 'clt' || formData.categoria === 'autonoma' || formData.categoria === 'domestica') && (
                  <div className="space-y-2">
                    <Label htmlFor="salario">
                      {formData.categoria === 'autonoma' ? 'Valor de Contribuição Mensal' : 'Salário Atual'}
                    </Label>
                    <Input
                      id="salario"
                      type="number"
                      placeholder="R$ 0,00"
                      value={formData.salario}
                      onChange={(e) => handleInputChange('salario', e.target.value)}
                    />
                  </div>
                )}

                {(formData.categoria === 'mei' || formData.categoria === 'autonoma' || formData.categoria === 'desempregada') && (
                  <div className="space-y-2">
                    <Label htmlFor="tempoContribuicao">Tempo de Contribuição (meses)</Label>
                    <Input
                      id="tempoContribuicao"
                      type="number"
                      placeholder="Ex: 12"
                      value={formData.tempoContribuicao}
                      onChange={(e) => handleInputChange('tempoContribuicao', e.target.value)}
                    />
                  </div>
                )}

                <Button 
                  onClick={calcularBeneficio}
                  className="w-full bg-pink-500 hover:bg-pink-600 text-white"
                  disabled={!isFormValid}
                >
                  Calcular Benefício
                </Button>

                <div className="bg-blue-50 p-4 rounded-lg">
                  <div className="flex items-start space-x-2">
                    <Info className="h-5 w-5 text-blue-500 mt-0.5" />
                    <div className="text-sm text-blue-700">
                      <p className="font-semibold mb-1">Importante:</p>
                      <p>Este é apenas um cálculo estimativo. O valor real pode variar conforme sua situação específica. Nossa assessoria faz o cálculo exato baseado em sua documentação.</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <DollarSign className="h-6 w-6 text-green-500" />
                  <span>Resultado da Simulação</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                {resultado ? (
                  <div className="space-y-6">
                    {resultado.valorMensal > 0 && (
                      <div className="text-center p-6 bg-gradient-to-r from-green-50 to-blue-50 rounded-xl">
                        <div className="text-3xl font-bold text-green-600 mb-2">
                          R$ {resultado.valorMensal.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                        </div>
                        <div className="text-sm text-gray-600 mb-4">Valor mensal estimado</div>
                        <div className="text-xl font-semibold text-gray-800">
                          Total: R$ {resultado.valorTotal.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                        </div>
                        <div className="text-sm text-gray-600">Em 4 meses de benefício</div>
                      </div>
                    )}
                    
                    <div className="space-y-3">
                      <h4 className="font-semibold text-gray-800">Observações:</h4>
                      <ul className="space-y-2">
                        {resultado.observacoes.map((obs, index) => (
                          <li key={index} className="flex items-start space-x-2">
                            <div className="w-2 h-2 bg-pink-500 rounded-full mt-2"></div>
                            <span className="text-gray-600 text-sm">{obs}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="bg-pink-50 p-4 rounded-lg">
                      <p className="text-pink-700 text-sm font-medium mb-2">
                        Quer garantir que você receba o valor correto?
                      </p>
                      <p className="text-pink-600 text-sm mb-3">
                        Nossa assessoria especializada verifica todos os seus direitos e garante o máximo valor possível.
                      </p>
                      <Button 
                        onClick={() => document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' })}
                        className="w-full bg-pink-500 hover:bg-pink-600 text-white"
                      >
                        Solicitar Assessoria Gratuita
                      </Button>
                    </div>
                  </div>
                ) : (
                  <div className="text-center py-12">
                    <CalculatorIcon className="h-16 w-16 text-gray-300 mx-auto mb-4" />
                    <p className="text-gray-500">
                      Preencha os dados acima para ver sua simulação
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}

