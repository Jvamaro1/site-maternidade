import { useState } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Heart, Baby, Shield, CheckCircle, Phone, Mail, MapPin, Users, Clock, Award } from 'lucide-react'
import { FAQ } from './components/FAQ.jsx'
import { Calculator } from './components/Calculator.jsx'
import './App.css'

// Importando as imagens
import maternidadeHero from './assets/images/maternidade-hero.jpg'
import gravidezConsulta from './assets/images/gravidez-consulta.jpg'
import bebefeliz from './assets/images/bebe-feliz.jpg'
import familiaFeliz from './assets/images/familia-feliz.jpg'
import mulherTrabalhando from './assets/images/mulher-trabalhando.jpg'

function App() {
  const [activeSection, setActiveSection] = useState('home')

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setActiveSection(sectionId)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-blue-50">
      {/* Header */}
      <header className="bg-white/90 backdrop-blur-md shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Heart className="h-8 w-8 text-pink-500" />
              <span className="text-2xl font-bold text-gray-800">MaterniCare</span>
            </div>
            <div className="hidden md:flex space-x-6">
              <button 
                onClick={() => scrollToSection('home')}
                className="text-gray-600 hover:text-pink-500 transition-colors"
              >
                Início
              </button>
              <button 
                onClick={() => scrollToSection('sobre')}
                className="text-gray-600 hover:text-pink-500 transition-colors"
              >
                Sobre Nós
              </button>
              <button 
                onClick={() => scrollToSection('servicos')}
                className="text-gray-600 hover:text-pink-500 transition-colors"
              >
                Serviços
              </button>
              <button 
                onClick={() => scrollToSection('calculadora')}
                className="text-gray-600 hover:text-pink-500 transition-colors"
              >
                Calculadora
              </button>
              <button 
                onClick={() => scrollToSection('faq')}
                className="text-gray-600 hover:text-pink-500 transition-colors"
              >
                FAQ
              </button>
              <button 
                onClick={() => scrollToSection('contato')}
                className="text-gray-600 hover:text-pink-500 transition-colors"
              >
                Contato
              </button>
            </div>
            <Button 
              onClick={() => scrollToSection('contato')}
              className="bg-pink-500 hover:bg-pink-600 text-white"
            >
              Consulta Gratuita
            </Button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="relative py-20 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge className="bg-pink-100 text-pink-700 hover:bg-pink-200">
                  Assessoria Especializada
                </Badge>
                <h1 className="text-5xl lg:text-6xl font-bold text-gray-800 leading-tight">
                  Seu <span className="text-pink-500">Salário Maternidade</span> Garantido
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Simplificamos todo o processo para você focar no que realmente importa: 
                  a chegada do seu bebê. Nossa assessoria especializada garante que você 
                  receba todos os benefícios que tem direito.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  className="bg-pink-500 hover:bg-pink-600 text-white px-8 py-4 text-lg"
                  onClick={() => scrollToSection('contato')}
                >
                  <Baby className="mr-2 h-5 w-5" />
                  Verificar Meus Direitos
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-pink-500 text-pink-500 hover:bg-pink-50 px-8 py-4 text-lg"
                  onClick={() => scrollToSection('servicos')}
                >
                  Saiba Mais
                </Button>
              </div>
              <div className="flex items-center space-x-8 pt-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-800">500+</div>
                  <div className="text-sm text-gray-600">Mães Atendidas</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-800">98%</div>
                  <div className="text-sm text-gray-600">Taxa de Sucesso</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-800">5 Anos</div>
                  <div className="text-sm text-gray-600">de Experiência</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src={maternidadeHero} 
                  alt="Mãe com bebê na maternidade" 
                  className="w-full h-[600px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl p-4 shadow-lg">
                <div className="flex items-center space-x-3">
                  <Shield className="h-8 w-8 text-green-500" />
                  <div>
                    <div className="font-semibold text-gray-800">100% Seguro</div>
                    <div className="text-sm text-gray-600">Processo Garantido</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Como Funciona */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Como Funciona Nossa Assessoria</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Um processo simples e transparente para garantir que você receba todos os seus direitos
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mb-4">
                  <Users className="h-8 w-8 text-pink-500" />
                </div>
                <CardTitle className="text-xl">1. Análise Gratuita</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Analisamos sua situação e verificamos todos os direitos que você possui. 
                  Consulta inicial completamente gratuita.
                </p>
              </CardContent>
            </Card>
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <Clock className="h-8 w-8 text-blue-500" />
                </div>
                <CardTitle className="text-xl">2. Documentação</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Organizamos toda a documentação necessária e fazemos o requerimento 
                  junto ao INSS de forma rápida e eficiente.
                </p>
              </CardContent>
            </Card>
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                  <Award className="h-8 w-8 text-green-500" />
                </div>
                <CardTitle className="text-xl">3. Acompanhamento</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Acompanhamos todo o processo até você receber seu benefício. 
                  Suporte completo em cada etapa.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Sobre Nós */}
      <section id="sobre" className="py-20 bg-gradient-to-r from-pink-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-gray-800">Nossa Missão é Cuidar de Você</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Somos uma equipe especializada em direito previdenciário com foco especial 
                na maternidade. Entendemos que este é um momento único e especial na vida 
                de uma mulher, e nossa missão é garantir que você tenha tranquilidade 
                financeira para aproveitar cada momento com seu bebê.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-500" />
                  <span className="text-gray-700">Mais de 5 anos de experiência em direito previdenciário</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-500" />
                  <span className="text-gray-700">Especialização em benefícios relacionados à maternidade</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-500" />
                  <span className="text-gray-700">Atendimento humanizado e personalizado</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-500" />
                  <span className="text-gray-700">98% de taxa de sucesso nos processos</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src={mulherTrabalhando} 
                alt="Profissional trabalhando" 
                className="rounded-2xl shadow-xl w-full h-[500px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Serviços */}
      <section id="servicos" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Nossos Serviços</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Oferecemos assessoria completa para garantir todos os seus direitos previdenciários
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Baby className="h-6 w-6 text-pink-500" />
                  <span>Salário Maternidade</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Assessoria completa para obtenção do salário maternidade, desde a análise 
                  de elegibilidade até o recebimento do benefício.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Análise de documentos</li>
                  <li>• Cálculo do valor do benefício</li>
                  <li>• Requerimento junto ao INSS</li>
                  <li>• Acompanhamento do processo</li>
                </ul>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Shield className="h-6 w-6 text-blue-500" />
                  <span>Auxílio Doença</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Suporte para obtenção de auxílio doença durante a gravidez em casos 
                  de complicações ou necessidade de afastamento médico.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Avaliação médica</li>
                  <li>• Documentação necessária</li>
                  <li>• Perícia médica</li>
                  <li>• Recursos em caso de negativa</li>
                </ul>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Heart className="h-6 w-6 text-red-500" />
                  <span>Revisão de Benefícios</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Revisão de benefícios já concedidos para garantir que você esteja 
                  recebendo o valor correto conforme seus direitos.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Análise de valores</li>
                  <li>• Cálculo de diferenças</li>
                  <li>• Pedido de revisão</li>
                  <li>• Recuperação de valores</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Calculadora */}
      <Calculator />

      {/* Quem Tem Direito */}
      <section id="direitos" className="py-20 bg-gradient-to-r from-blue-50 to-pink-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Quem Tem Direito ao Salário Maternidade?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Conheça os requisitos para diferentes categorias de seguradas
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-green-600">Trabalhadoras CLT</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    Empregadas com carteira assinada têm direito ao salário maternidade 
                    independente do tempo de contribuição.
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span className="text-sm">Carteira assinada</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span className="text-sm">120 dias de benefício</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                      <span className="text-sm">Valor: salário integral</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-blue-600">MEI e Autônomas</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    Microempreendedoras e contribuintes individuais precisam de 
                    carência mínima de contribuições.
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-blue-500" />
                      <span className="text-sm">10 meses de contribuição</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-blue-500" />
                      <span className="text-sm">120 dias de benefício</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-blue-500" />
                      <span className="text-sm">Valor: conforme contribuição</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            <div className="space-y-6">
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-purple-600">Desempregadas</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    Mulheres desempregadas podem ter direito se mantiverem a 
                    qualidade de segurada.
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-purple-500" />
                      <span className="text-sm">Qualidade de segurada</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-purple-500" />
                      <span className="text-sm">10 meses de carência</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-purple-500" />
                      <span className="text-sm">Valor: salário mínimo</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-orange-600">Empregadas Domésticas</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    Trabalhadoras domésticas com carteira assinada têm os 
                    mesmos direitos das demais empregadas.
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-orange-500" />
                      <span className="text-sm">Carteira assinada</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-orange-500" />
                      <span className="text-sm">120 dias de benefício</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-orange-500" />
                      <span className="text-sm">Valor: último salário</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
          <div className="text-center mt-12">
            <Button 
              size="lg" 
              className="bg-pink-500 hover:bg-pink-600 text-white px-8 py-4"
              onClick={() => scrollToSection('contato')}
            >
              Verificar Meus Direitos Agora
            </Button>
          </div>
        </div>
      </section>

      {/* Depoimentos */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">O Que Nossas Clientes Dizem</h2>
            <p className="text-xl text-gray-600">Histórias reais de mães que tiveram seus direitos garantidos</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="flex items-center space-x-4 mb-4">
                  <img 
                    src={bebefeliz} 
                    alt="Cliente satisfeita" 
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-semibold">Maria Silva</div>
                    <div className="text-sm text-gray-600">Mãe de primeira viagem</div>
                  </div>
                </div>
                <p className="text-gray-600 italic">
                  "A equipe foi incrível! Me ajudaram em todo o processo e consegui 
                  receber meu salário maternidade sem nenhuma complicação. 
                  Recomendo para todas as mães!"
                </p>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="flex items-center space-x-4 mb-4">
                  <img 
                    src={familiaFeliz} 
                    alt="Cliente satisfeita" 
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-semibold">Ana Costa</div>
                    <div className="text-sm text-gray-600">MEI</div>
                  </div>
                </div>
                <p className="text-gray-600 italic">
                  "Como MEI, eu não sabia se tinha direito. Eles esclareceram tudo 
                  e me ajudaram a conseguir o benefício. Profissionais excelentes!"
                </p>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="pt-6">
                <div className="flex items-center space-x-4 mb-4">
                  <img 
                    src={gravidezConsulta} 
                    alt="Cliente satisfeita" 
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-semibold">Carla Santos</div>
                    <div className="text-sm text-gray-600">Desempregada</div>
                  </div>
                </div>
                <p className="text-gray-600 italic">
                  "Estava desempregada e achei que não tinha direito a nada. 
                  Eles provaram o contrário e conseguiram meu benefício!"
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQ />

      {/* Contato */}
      <section id="contato" className="py-20 bg-gradient-to-r from-pink-500 to-blue-500 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Entre em Contato Conosco</h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Agende sua consulta gratuita e descubra todos os direitos que você tem. 
              Nossa equipe está pronta para ajudar você!
            </p>
          </div>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                    <Phone className="h-6 w-6" />
                  </div>
                  <div>
                    <div className="font-semibold">Telefone</div>
                    <div className="opacity-90">(11) 99999-9999</div>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                    <Mail className="h-6 w-6" />
                  </div>
                  <div>
                    <div className="font-semibold">E-mail</div>
                    <div className="opacity-90">contato@maternicare.com.br</div>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <div>
                    <div className="font-semibold">Endereço</div>
                    <div className="opacity-90">São Paulo, SP - Atendimento Online</div>
                  </div>
                </div>
              </div>
              <div className="bg-white/10 rounded-xl p-6">
                <h3 className="text-xl font-semibold mb-4">Horário de Atendimento</h3>
                <div className="space-y-2 opacity-90">
                  <div>Segunda a Sexta: 8h às 18h</div>
                  <div>Sábado: 8h às 12h</div>
                  <div>Domingo: Plantão WhatsApp</div>
                </div>
              </div>
            </div>
            <div className="w-full max-w-md mx-auto bg-white rounded-2xl shadow-xl p-6">
              <h3 className="text-2xl font-bold text-gray-800 text-center mb-6">Envie Sua Mensagem</h3>
              <form className="space-y-4">
                <div>
                  <label htmlFor="nome" className="block text-sm font-medium text-gray-700 mb-1">Nome Completo *</label>
                  <input
                    type="text"
                    id="nome"
                    placeholder="Seu nome completo"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">E-mail *</label>
                  <input
                    type="email"
                    id="email"
                    placeholder="seu.email@exemplo.com"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="telefone" className="block text-sm font-medium text-gray-700 mb-1">Telefone (WhatsApp) *</label>
                  <input
                    type="tel"
                    id="telefone"
                    placeholder="(DD) 99999-9999"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="mensagem" className="block text-sm font-medium text-gray-700 mb-1">Mensagem (Opcional)</label>
                  <textarea
                    id="mensagem"
                    placeholder="Descreva brevemente sua dúvida ou situação..."
                    rows="4"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                  />
                </div>
                <button type="submit" className="w-full bg-pink-500 hover:bg-pink-600 text-white py-3 text-lg rounded-lg transition-colors">
                  Enviar Mensagem
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Heart className="h-8 w-8 text-pink-500" />
                <span className="text-2xl font-bold">MaterniCare</span>
              </div>
              <p className="text-gray-400 leading-relaxed">
                Assessoria especializada em salário maternidade. 
                Cuidamos dos seus direitos para você cuidar do seu bebê.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Links Úteis</h4>
              <div className="space-y-2">
                <button 
                  onClick={() => scrollToSection('sobre')}
                  className="block text-gray-400 hover:text-white transition-colors"
                >
                  Sobre Nós
                </button>
                <button 
                  onClick={() => scrollToSection('servicos')}
                  className="block text-gray-400 hover:text-white transition-colors"
                >
                  Serviços
                </button>
                <button 
                  onClick={() => scrollToSection('calculadora')}
                  className="block text-gray-400 hover:text-white transition-colors"
                >
                  Calculadora
                </button>
                <button 
                  onClick={() => scrollToSection('faq')}
                  className="block text-gray-400 hover:text-white transition-colors"
                >
                  FAQ
                </button>
                <button 
                  onClick={() => scrollToSection('contato')}
                  className="block text-gray-400 hover:text-white transition-colors"
                >
                  Contato
                </button>
              </div>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Contato</h4>
              <div className="space-y-2 text-gray-400">
                <div>(11) 99999-9999</div>
                <div>contato@maternicare.com.br</div>
                <div>São Paulo, SP</div>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 MaterniCare. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App

