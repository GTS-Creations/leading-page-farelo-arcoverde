"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Phone,
  Mail,
  MapPin,
  ArrowRight,
  Leaf,
  ShieldCheck,
  TrendingUp,
  Truck,
  Menu,
  X,
} from "lucide-react";

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 z-50 w-full border-b bg-white">
        <div className="container flex h-16 items-center justify-between px-4 md:px-6">
          <div className="flex items-center gap-2">
            <span className="text-xl font-bold text-green-700">
              Farelo Arcoverde
            </span>
          </div>
          <nav className="hidden md:flex gap-6">
            <a
              href="#inicio"
              className="text-sm font-medium hover:text-green-700 transition-colors"
            >
              Início
            </a>
            <a
              href="#sobre"
              className="text-sm font-medium hover:text-green-700 transition-colors"
            >
              Sobre
            </a>
            <a
              href="#produtos"
              className="text-sm font-medium hover:text-green-700 transition-colors"
            >
              Produtos
            </a>
            <a
              href="#beneficios"
              className="text-sm font-medium hover:text-green-700 transition-colors"
            >
              Benefícios
            </a>
            <a
              href="#localizacao"
              className="text-sm font-medium hover:text-green-700 transition-colors"
            >
              Localização
            </a>
            <a
              href="#contato"
              className="text-sm font-medium hover:text-green-700 transition-colors"
            >
              Contato
            </a>
          </nav>
          <a
            href="#contato"
            className="hidden md:inline-flex h-9 items-center justify-center rounded-md bg-green-700 px-4 py-2 text-sm font-medium text-white shadow transition-colors hover:bg-green-800"
          >
            Fale Conosco
          </a>
          <button
            className="md:hidden"
            onClick={toggleMobileMenu}
            aria-label="Menu"
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Menu Mobile */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="container px-4 py-3 flex flex-col space-y-3">
              <a
                href="#inicio"
                className="text-sm font-medium hover:text-green-700 transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Início
              </a>
              <a
                href="#sobre"
                className="text-sm font-medium hover:text-green-700 transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Sobre
              </a>
              <a
                href="#produtos"
                className="text-sm font-medium hover:text-green-700 transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Produtos
              </a>
              <a
                href="#beneficios"
                className="text-sm font-medium hover:text-green-700 transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Benefícios
              </a>
              <a
                href="#localizacao"
                className="text-sm font-medium hover:text-green-700 transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Localização
              </a>
              <a
                href="#contato"
                className="text-sm font-medium hover:text-green-700 transition-colors py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contato
              </a>
              <a
                href="#contato"
                className="inline-flex h-9 items-center justify-center rounded-md bg-green-700 px-4 py-2 text-sm font-medium text-white shadow transition-colors hover:bg-green-800 mt-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                Fale Conosco
              </a>
            </div>
          </div>
        )}
      </header>
      <main className="flex-1">
        <section
          id="inicio"
          className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-green-50 to-white"
        >
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl text-green-800">
                  Excelência em Nutrição Animal
                </h1>
                <p className="max-w-[600px] text-gray-600 md:text-xl">
                  Fornecemos farelo e torta de algodão de alta qualidade para
                  garantir a melhor nutrição para o seu rebanho.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="#produtos"
                    className="inline-flex h-10 items-center justify-center rounded-md bg-green-700 px-8 text-sm font-medium text-white shadow transition-colors hover:bg-green-800"
                  >
                    Nossos Produtos
                  </a>
                  <a
                    href="#contato"
                    className="inline-flex h-10 items-center justify-center rounded-md border border-green-700 px-8 text-sm font-medium text-green-700 shadow-sm transition-colors hover:bg-green-50"
                  >
                    Entre em Contato
                  </a>
                </div>
              </div>
              <div className="mx-auto lg:ml-auto">
                <Image
                  src="/gado.jpg?height=400&width=590"
                  alt="Gado saudável com nutrição de qualidade"
                  width={590}
                  height={400}
                  className="rounded-lg object-cover"
                  style={{
                    WebkitMaskImage:
                      "linear-gradient(to left, black, transparent)",
                    maskImage: "linear-gradient(to left, black, transparent)",
                    WebkitMaskSize: "100% 50%",
                    maskSize: "100% 100%",
                  }}
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        <section id="sobre" className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-green-800">
                  Sobre a Farelo Arcoverde
                </h2>
                <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Há mais de 15 anos no mercado, a Farelo Arcoverde é referência
                  em nutrição animal, fornecendo produtos de alta qualidade para
                  produtores rurais de toda a região.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <Image
                src="/fachada.png?height=400&width=550"
                alt="Gado alimentado com nossos produtos"
                width={550}
                height={400}
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
              />
              <div className="flex flex-col justify-center space-y-4">
                <ul className="grid gap-6">
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold text-green-700">
                        Nossa Missão
                      </h3>
                      <p className="text-gray-600">
                        Fornecer produtos de nutrição animal de alta qualidade,
                        contribuindo para o desenvolvimento sustentável da
                        pecuária e o sucesso dos nossos clientes.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold text-green-700">
                        Nossa Visão
                      </h3>
                      <p className="text-gray-600">
                        Ser reconhecida como líder em soluções de nutrição
                        animal, promovendo a inovação e a sustentabilidade no
                        setor agropecuário.
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="grid gap-1">
                      <h3 className="text-xl font-bold text-green-700">
                        Nossos Valores
                      </h3>
                      <p className="text-gray-600">
                        Qualidade, compromisso, sustentabilidade e respeito pelo
                        produtor rural e pelo meio ambiente.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section
          id="produtos"
          className="w-full py-12 md:py-24 lg:py-32 bg-green-50"
        >
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-green-800">
                  Nossos Produtos
                </h2>
                <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Oferecemos uma linha completa de produtos para nutrição
                  animal, com foco em qualidade e resultados.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-8 py-12 sm:grid-cols-2 md:gap-12 lg:grid-cols-3">
              <div className="flex flex-col items-center space-y-4 rounded-lg border p-6 shadow-sm bg-white">
                <div className="h-16 w-16 rounded-full bg-green-100 flex items-center justify-center">
                  <Leaf className="h-8 w-8 text-green-700" />
                </div>
                <h3 className="text-xl font-bold text-green-700">
                  Farelo de Algodão
                </h3>
                <p className="text-center text-gray-600">
                  Rico em proteínas e nutrientes essenciais para o
                  desenvolvimento saudável do seu rebanho.
                </p>
                <a
                  href="#contato"
                  className="inline-flex items-center text-sm font-medium text-green-700 hover:underline"
                >
                  Saiba mais <ArrowRight className="ml-1 h-4 w-4" />
                </a>
              </div>
              <div className="flex flex-col items-center space-y-4 rounded-lg border p-6 shadow-sm bg-white">
                <div className="h-16 w-16 rounded-full bg-green-100 flex items-center justify-center">
                  <Leaf className="h-8 w-8 text-green-700" />
                </div>
                <h3 className="text-xl font-bold text-green-700">
                  Torta de Algodão
                </h3>
                <p className="text-center text-gray-600">
                  Excelente fonte de energia e proteína para complementar a
                  alimentação do seu gado.
                </p>
                <a
                  href="#contato"
                  className="inline-flex items-center text-sm font-medium text-green-700 hover:underline"
                >
                  Saiba mais <ArrowRight className="ml-1 h-4 w-4" />
                </a>
              </div>
              <div className="flex flex-col items-center space-y-4 rounded-lg border p-6 shadow-sm bg-white">
                <div className="h-16 w-16 rounded-full bg-green-100 flex items-center justify-center">
                  <Leaf className="h-8 w-8 text-green-700" />
                </div>
                <h3 className="text-xl font-bold text-green-700">
                  Rações Especiais
                </h3>
                <p className="text-center text-gray-600">
                  Formulações específicas para diferentes fases de
                  desenvolvimento e tipos de animais.
                </p>
                <a
                  href="#contato"
                  className="inline-flex items-center text-sm font-medium text-green-700 hover:underline"
                >
                  Saiba mais <ArrowRight className="ml-1 h-4 w-4" />
                </a>
              </div>
            </div>
            <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-lg overflow-hidden">
                <Image
                  src="/gados.png?height=400&width=600&text=Gado+Saudável"
                  alt="Gado saudável"
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="rounded-lg overflow-hidden">
                <Image
                  src="/farelo.png?height=400&width=600&text=Rebanho+Nutrido"
                  alt="Rebanho com nutrição de qualidade"
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        <section
          id="beneficios"
          className="w-full py-12 md:py-24 lg:py-32 bg-white"
        >
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-green-800">
                  Por que escolher a Farelo Arcoverde?
                </h2>
                <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Nossos produtos oferecem benefícios comprovados para o
                  desenvolvimento e saúde do seu rebanho.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-8 py-12 sm:grid-cols-2 md:gap-12 lg:grid-cols-4">
              <div className="flex flex-col items-center space-y-2 rounded-lg p-4">
                <div className="h-12 w-12 rounded-full bg-green-100 flex items-center justify-center">
                  <ShieldCheck className="h-6 w-6 text-green-700" />
                </div>
                <h3 className="text-lg font-bold text-green-700">
                  Qualidade Garantida
                </h3>
                <p className="text-center text-sm text-gray-600">
                  Produtos selecionados e processados com rigoroso controle de
                  qualidade.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg p-4">
                <div className="h-12 w-12 rounded-full bg-green-100 flex items-center justify-center">
                  <TrendingUp className="h-6 w-6 text-green-700" />
                </div>
                <h3 className="text-lg font-bold text-green-700">
                  Maior Produtividade
                </h3>
                <p className="text-center text-sm text-gray-600">
                  Nutrição balanceada que resulta em melhor desempenho do seu
                  rebanho.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg p-4">
                <div className="h-12 w-12 rounded-full bg-green-100 flex items-center justify-center">
                  <Truck className="h-6 w-6 text-green-700" />
                </div>
                <h3 className="text-lg font-bold text-green-700">
                  Entrega Rápida
                </h3>
                <p className="text-center text-sm text-gray-600">
                  Sistema logístico eficiente para atender sua demanda no prazo
                  necessário.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg p-4">
                <div className="h-12 w-12 rounded-full bg-green-100 flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6 text-green-700"
                  >
                    <path d="M12 2a10 10 0 1 0 10 10 4 4 0 0 1-5-5 4 4 0 0 1-5-5"></path>
                    <path d="M8.5 8.5v.01"></path>
                    <path d="M16 15.5v.01"></path>
                    <path d="M12 12v.01"></path>
                    <path d="M11 17v.01"></path>
                    <path d="M7 14v.01"></path>
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-green-700">
                  Suporte Técnico
                </h3>
                <p className="text-center text-sm text-gray-600">
                  Equipe especializada para orientar sobre o melhor uso dos
                  nossos produtos.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-green-700 text-white">
          <div className="container px-4 md:px-6">
            <div className="grid gap-10 md:gap-16 lg:grid-cols-2">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Nutrição de qualidade para o seu rebanho
                </h2>
                <p className="max-w-[600px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Aumente a produtividade do seu negócio com produtos que fazem
                  a diferença.
                </p>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <a
                    href="#contato"
                    className="inline-flex h-10 items-center justify-center rounded-md bg-white px-8 text-sm font-medium text-green-700 shadow transition-colors hover:bg-gray-100"
                  >
                    Fale com um Consultor
                  </a>
                </div>
              </div>
              <div className="flex flex-col justify-center space-y-4">
                <div className="flex items-center space-x-4 rounded-lg bg-green-800 p-4">
                  <div className="h-12 w-12 rounded-full bg-green-700 flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-6 w-6 text-white"
                    >
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold">Atendimento Personalizado</h3>
                    <p className="text-sm text-gray-200">
                      Nossa equipe está pronta para atender às suas necessidades
                      específicas.
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-4 rounded-lg bg-green-800 p-4">
                  <div className="h-12 w-12 rounded-full bg-green-700 flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-6 w-6 text-white"
                    >
                      <rect width="20" height="14" x="2" y="5" rx="2"></rect>
                      <line x1="2" x2="22" y1="10" y2="10"></line>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold">Condições Especiais</h3>
                    <p className="text-sm text-gray-200">
                      Oferecemos condições de pagamento facilitadas para nossos
                      clientes.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          id="contato"
          className="w-full py-12 md:py-24 lg:py-32 bg-white"
        >
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-green-800">
                  Entre em Contato
                </h2>
                <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Estamos prontos para atender às suas necessidades e responder
                  a todas as suas dúvidas.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-2">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-green-700" />
                  <span className="text-gray-600">(87) 9.8101.0051</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-green-700" />
                  <span className="text-gray-600">
                    fareloarcoverde@hotmail.com
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-green-700" />
                  <span className="text-gray-600">
                    Avenida Conselheiro João Alfredo, 658 - Santa Luzia,
                    Arcoverde, PE, 56517-100
                  </span>
                </div>
                <div className="pt-4">
                  <h3 className="text-lg font-bold text-green-700 mb-2">
                    Horário de Funcionamento
                  </h3>
                  <p className="text-gray-600">Segunda a Sexta: 8h às 18h</p>
                  <p className="text-gray-600">Sábado: 8h às 12h</p>
                </div>
              </div>
              <div className="space-y-4">
                <form className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label
                        htmlFor="nome"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-gray-700"
                      >
                        Nome
                      </label>
                      <input
                        id="nome"
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        placeholder="Seu nome"
                      />
                    </div>
                    <div className="space-y-2">
                      <label
                        htmlFor="telefone"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-gray-700"
                      >
                        Telefone
                      </label>
                      <input
                        id="telefone"
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        placeholder="(00) 00000-0000"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="email"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-gray-700"
                    >
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      placeholder="seu@email.com"
                    />
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="mensagem"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-gray-700"
                    >
                      Mensagem
                    </label>
                    <textarea
                      id="mensagem"
                      className="flex min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      placeholder="Digite sua mensagem aqui..."
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="inline-flex h-10 w-full items-center justify-center rounded-md bg-green-700 px-4 py-2 text-sm font-medium text-white shadow transition-colors hover:bg-green-800 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                  >
                    Enviar Mensagem
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>

        <section
          id="localizacao"
          className="w-full py-12 md:py-24 lg:py-32 bg-green-50"
        >
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-green-800">
                  Nossa Localização
                </h2>
                <p className="max-w-[900px] text-gray-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Venha nos visitar e conhecer nossos produtos de perto.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-2">
              <div className="space-y-4">
                <div className="rounded-lg overflow-hidden">
                  <Image
                    src="/fachada.png?height=400&width=600&text=Mapa+de+Localização"
                    alt="Mapa de localização"
                    width={500}
                    height={400}
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <h3 className="text-xl font-bold text-green-700 mb-4">
                    Endereço
                  </h3>
                  <p className="text-gray-600 mb-2">
                    Avenida Conselheiro João Alfredo, 658
                  </p>
                  <p className="text-gray-600 mb-2">Bairro: Santa Luzia</p>
                  <p className="text-gray-600 mb-2">CEP: 56517-100</p>
                  <p className="text-gray-600 mb-2">Município: Arcoverde</p>
                  <p className="text-gray-600 mb-2">Estado: Pernambuco</p>
                  <div className="mt-6">
                    <Link
                      href="https://maps.google.com/?q=Avenida+Conselheiro+Joao+Alfredo,+658,+Santa+Luzia,+Arcoverde,+Pernambuco,+56517-100"
                      target="_blank"
                      className="inline-flex h-10 items-center justify-center rounded-md bg-green-700 px-6 text-sm font-medium text-white shadow transition-colors hover:bg-green-800"
                    >
                      Ver no Google Maps
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full border-t bg-green-800 text-white py-6">
        <div className="container flex flex-col md:flex-row justify-between items-center gap-4 px-4 md:px-6">
          <div className="flex items-center gap-2">
            <span className="text-lg font-bold">Farelo Arcoverde</span>
          </div>
          <p className="text-sm text-gray-200">
            © {new Date().getFullYear()} Farelo Arcoverde. Todos os direitos
            reservados.
          </p>
          <div className="flex gap-4">
            <Link href="#" className="text-gray-200 hover:text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-5 w-5"
              >
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
              </svg>
              <span className="sr-only">Facebook</span>
            </Link>
            <Link href="#" className="text-gray-200 hover:text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-5 w-5"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
              </svg>
              <span className="sr-only">Instagram</span>
            </Link>
            <Link href="#" className="text-gray-200 hover:text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-5 w-5"
              >
                <path d="M22 4.01c-1 .49-1.98.689-3 .99-1.121-1.265-2.783-1.335-4.38-.737S11.977 6.323 12 8v1c-3.245.083-6.135-1.395-8-4 0 0-4.182 7.433 4 11-1.872 1.247-3.739 2.088-6 2 3.308 1.803 6.913 2.423 10.034 1.517 3.58-1.04 6.522-3.723 7.651-7.742a13.84 13.84 0 0 0 .497-3.753c0-.249 1.51-2.772 1.818-4.013z" />
              </svg>
              <span className="sr-only">Twitter</span>
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
