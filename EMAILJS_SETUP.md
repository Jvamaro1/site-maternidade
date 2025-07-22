# Configuração do EmailJS

Para que o formulário de contato funcione, você precisa configurar o EmailJS. Siga os passos abaixo:

## 1. Criar conta no EmailJS

1. Acesse [https://www.emailjs.com/](https://www.emailjs.com/)
2. Clique em "Sign Up" e crie sua conta gratuita
3. Confirme seu email

## 2. Configurar um serviço de email

1. No dashboard do EmailJS, clique em "Email Services"
2. Clique em "Add New Service"
3. Escolha seu provedor de email (Gmail, Outlook, etc.)
4. Para Gmail:
   - Selecione "Gmail"
   - Faça login com sua conta Google
   - Autorize o EmailJS
5. Anote o **Service ID** que será gerado

## 3. Criar um template de email

1. Clique em "Email Templates"
2. Clique em "Create New Template"
3. Configure o template com o seguinte conteúdo:

**Subject:** Nova mensagem do site MaterniCare

**Content:**
```
Olá,

Você recebeu uma nova mensagem através do formulário de contato do site MaterniCare:

Nome: {{from_name}}
Email: {{from_email}}
Telefone: {{phone}}

Mensagem:
{{message}}

---
Enviado automaticamente pelo formulário de contato
```

4. Clique em "Save" e anote o **Template ID**

## 4. Obter a Public Key

1. Vá para "Account" > "General"
2. Copie a **Public Key**

## 5. Atualizar o código

No arquivo `src/App.jsx`, substitua as seguintes linhas:

```javascript
const serviceID = 'YOUR_SERVICE_ID'      // Substitua pelo Service ID
const templateID = 'YOUR_TEMPLATE_ID'    // Substitua pelo Template ID  
const publicKey = 'YOUR_PUBLIC_KEY'      // Substitua pela Public Key
```

## 6. Testar o formulário

1. Execute `npm run dev`
2. Acesse o site e teste o formulário de contato
3. Verifique se o email chegou na sua caixa de entrada

## Limites da conta gratuita

- 200 emails por mês
- Perfeito para sites pequenos e médios

## Dicas importantes

- Use um email profissional para receber as mensagens
- Configure filtros no seu email para organizar as mensagens
- Teste sempre após fazer alterações
- Mantenha suas chaves seguras (não compartilhe publicamente)

