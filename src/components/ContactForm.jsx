import { useState } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Input } from '@/components/ui/input.jsx'
import { Textarea } from '@/components/ui/textarea.jsx'
import { Label } from '@/components/ui/label.jsx'

export function ContactForm() {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    situacao: '',
    mensagem: ''
  })

  const handleInputChange = (e) => {
    const { id, value } = e.target
    setFormData(prevData => ({
      ...prevData,
      [id]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Aqui você pode adicionar a lógica para enviar os dados do formulário
    console.log('Dados do formulário:', formData)
    alert('Mensagem enviada com sucesso! Em breve entraremos em contato.')
    setFormData({
      nome: '',
      email: '',
      telefone: '',
      situacao: '',
      mensagem: ''
    })
  }

  console.log("ContactForm re-renderizado");
  return (
    <div className="w-full max-w-md mx-auto bg-white rounded-2xl shadow-xl p-6">
      <h3 className="text-2xl font-bold text-gray-800 text-center mb-6">Envie Sua Mensagem</h3>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <Label htmlFor="nome">Nome Completo *</Label>
          <Input
            type="text"
            id="nome"
            placeholder="Seu nome completo"
            value={formData.nome}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <Label htmlFor="email">E-mail *</Label>
          <Input
            type="email"
            id="email"
            placeholder="seu.email@exemplo.com"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <Label htmlFor="telefone">Telefone (WhatsApp) *</Label>
          <Input
            type="tel"
            id="telefone"
            placeholder="(DD) 99999-9999"
            value={formData.telefone}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <Label htmlFor="situacao">Situação Atual *</Label>
          <select
            id="situacao"
            value={formData.situacao}
            onChange={handleInputChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
            required
          >
            <option value="">Selecione sua situação</option>
            <option value="clt">Empregada CLT</option>
            <option value="mei">MEI</option>
            <option value="autonoma">Autônoma</option>
            <option value="desempregada">Desempregada</option>
            <option value="domestica">Empregada Doméstica</option>
            <option value="outra">Outra</option>
          </select>
        </div>
        <div>
          <Label htmlFor="mensagem">Mensagem (Opcional)</Label>
          <Textarea
            id="mensagem"
            placeholder="Descreva brevemente sua dúvida ou situação..."
            value={formData.mensagem}
            onChange={handleInputChange}
            rows="4"
          />
        </div>
        <Button type="submit" className="w-full bg-pink-500 hover:bg-pink-600 text-white py-3 text-lg">
          Enviar Mensagem
        </Button>
      </form>
    </div>
  )
}


