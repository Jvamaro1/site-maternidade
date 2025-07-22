import { useState } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Input } from '@/components/ui/input.jsx'
import { Label } from '@/components/ui/label.jsx'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select.jsx'
import { Textarea } from '@/components/ui/textarea.jsx'
import { CheckCircle, AlertCircle } from 'lucide-react'

export function ContactForm() {
  const [formData, setFormData] = useState({
    nome: '',
    whatsapp: '',
    email: '',
    situacao: '',
    mensagem: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simular envio do formulário
    try {
      await new Promise(resolve => setTimeout(resolve, 2000))
      setSubmitStatus('success')
      setFormData({
        nome: '',
        whatsapp: '',
        email: '',
        situacao: '',
        mensagem: ''
      })
    } catch (error) {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
      setTimeout(() => setSubmitStatus(null), 5000)
    }
  }

  const isFormValid = formData.nome && formData.whatsapp && formData.email && formData.situacao

  return (
    <Card className="w-full max-w-md mx-auto bg-white rounded-2xl shadow-xl">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-gray-800 text-center">
          Solicite sua Consulta Gratuita
        </CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="nome" className="text-sm font-medium text-gray-700">
              Nome Completo *
            </Label>
            <Input
              id="nome"
              type="text"
              placeholder="Seu nome completo"
              value={formData.nome}
              onChange={(e) => handleInputChange('nome', e.target.value)}
              className="w-full"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="whatsapp" className="text-sm font-medium text-gray-700">
              WhatsApp *
            </Label>
            <Input
              id="whatsapp"
              type="tel"
              placeholder="(11) 99999-9999"
              value={formData.whatsapp}
              onChange={(e) => handleInputChange('whatsapp', e.target.value)}
              className="w-full"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email" className="text-sm font-medium text-gray-700">
              E-mail *
            </Label>
            <Input
              id="email"
              type="email"
              placeholder="seu@email.com"
              value={formData.email}
              onChange={(e) => handleInputChange('email', e.target.value)}
              className="w-full"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="situacao" className="text-sm font-medium text-gray-700">
              Situação Atual *
            </Label>
            <Select value={formData.situacao} onValueChange={(value) => handleInputChange('situacao', value)}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Selecione sua situação" />
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

          <div className="space-y-2">
            <Label htmlFor="mensagem" className="text-sm font-medium text-gray-700">
              Mensagem (Opcional)
            </Label>
            <Textarea
              id="mensagem"
              placeholder="Conte-nos um pouco sobre sua situação..."
              value={formData.mensagem}
              onChange={(e) => handleInputChange('mensagem', e.target.value)}
              className="w-full min-h-[80px]"
            />
          </div>

          {submitStatus === 'success' && (
            <div className="flex items-center space-x-2 text-green-600 bg-green-50 p-3 rounded-lg">
              <CheckCircle className="h-5 w-5" />
              <span className="text-sm">Mensagem enviada com sucesso! Entraremos em contato em breve.</span>
            </div>
          )}

          {submitStatus === 'error' && (
            <div className="flex items-center space-x-2 text-red-600 bg-red-50 p-3 rounded-lg">
              <AlertCircle className="h-5 w-5" />
              <span className="text-sm">Erro ao enviar mensagem. Tente novamente.</span>
            </div>
          )}

          <Button 
            type="submit"
            className="w-full bg-pink-500 hover:bg-pink-600 text-white py-3 text-lg"
            disabled={!isFormValid || isSubmitting}
          >
            {isSubmitting ? 'Enviando...' : 'Solicitar Consulta Gratuita'}
          </Button>

          <p className="text-xs text-gray-500 text-center">
            * Campos obrigatórios. Seus dados estão protegidos e não serão compartilhados.
          </p>
        </form>
      </CardContent>
    </Card>
  )
}

