// Fichier : app/page.tsx

import { CheckSquare, ChevronDown } from 'lucide-react';
import Image from 'next/image'; // Importation du composant optimisé pour les images

// On définit les types pour les props du composant
interface FaqItemProps {
  question: string;
  children: React.ReactNode;
}
// Composant pour la FAQ pour éviter la répétition du code
const FaqItem = ({ question, children }) => (
  <details className="group border-b border-gray-700/50 py-4">
    <summary className="flex cursor-pointer list-none items-center justify-between font-medium">
      {question}
      <ChevronDown className="transition-transform duration-300 group-open:rotate-180" />
    </summary>
    <p className="mt-4 text-gray-400">{children}</p>
  </details>
);

// --- COMPOSANT PRINCIPAL DE LA PAGE ---
export default function WaitlistPage() {
  return (
    <main className="bg-[#121212] text-white font-sans antialiased">
      {/* En-tête avec le logo */}
      <header className="absolute top-0 left-1/2 -translate-x-1/2 py-6 flex items-center gap-4">
        <Image src="/vector-4.svg" alt="Décoration" width={24} height={24} className="h-6 w-auto" />
        <Image src="/logo.svg" alt="Cook'Idea Logo" width={132} height={32} className="h-8 w-auto" />
      </header>

      <div className="container mx-auto px-4">

        {/* Section Héros */}
        <section className="flex flex-col items-center text-center py-24 md:py-32 pt-40">
          <div className="relative">
            <h1 className="text-5xl md:text-6xl font-bold leading-tight z-10 relative">
              <Image src="/group-1.svg" alt="Décoration" width={96} height={96} className="absolute -top-12 -left-25 w-24 hidden md:block" />
              Cuisinez mieux, ensemble
              <Image src="/group-2.svg" alt="Décoration" width={96} height={96} className="absolute -bottom-1 -right-25 w-24 hidden md:block" />
            </h1>
          </div>
          <p className="max-w-xl mt-6 text-lg text-gray-300">
            Une application pensée à partir des retours de milliers d&apos;utilisateurs déçus par les applications existantes. Découvrez, partagez et planifiez vos recettes avec une communauté qui place l&apos;entraide avant les publicités et la complexité.
          </p>
          <form
            action="https://formspree.io/f/mgvyjyrn"
            method="POST"
            className="flex flex-col items-center gap-4 mt-8 w-full max-w-md"
          >
            <p className="text-xs text-gray-500 mb-2">
              Soyez avertis lors de la sortie de Cookidea et gagnez un badge pour vous démarquer
            </p>
            <div className="flex w-full">
              <input
                type="email"
                name="email"
                placeholder="votre@mail.com"
                className="w-full text-center px-6 py-3 rounded-l-full bg-[#1D1C22] text-white placeholder-gray-500 border border-r-0 border-[#3D3A47] focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#FF7A86]"
              />
              <button
                type="submit"
                className="flex-shrink-0 px-8 py-3 rounded-r-full bg-[#FF7A86] text-black font-semibold shadow-lg hover:bg-opacity-90 transition-all duration-300"
              >
                Rejoindre
              </button>
            </div>
          </form>
        </section>

        {/* Section Ce que Cookidea vous offre */}
        <section className="py-20">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Ce que Cookidea vous offre</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <div className="bg-[#1D1C22] rounded-xl p-6 text-center flex flex-col items-center border border-[#3D3A47] min-h-[300px] justify-center">
              <Image src="/image.png" alt="Icône communauté" width={116} height={116} className="h-29 w-39 mb-4" />
              <h3 className="text-xl font-bold mb-2">Communauté active</h3>
              <p className="text-gray-400">Explorez les idées de cuisine partagées par d&apos;autres utilisateurs, échangez des astuces et publiez vos propres créations.</p>
            </div>
            <div className="bg-[#1D1C22] rounded-xl p-6 text-center flex flex-col items-center border border-[#3D3A47] min-h-[300px] justify-center">
              <Image src="/badges.png" alt="Icône badges" width={96} height={96} className="h-24 w-24 mb-4" />
              <h3 className="text-xl font-bold mb-2">Soyez reconnu grâce à vos badges</h3>
              <p className="text-gray-400">Gagnez des badges en participant et faites savoir à tout le monde que vous êtes un vrai passionné.</p>
            </div>
            <div className="bg-[#1D1C22] rounded-xl p-6 text-center flex flex-col items-center border border-[#3D3A47] min-h-[300px] justify-center">
              <Image src="/fridge.png" alt="Icône frigo" width={96} height={96} className="h-24 w-24 mb-4" />
              <h3 className="text-xl font-bold mb-2">Cuisinez ce que vous avez sous la main</h3>
              <p className="text-gray-400">Pas besoin de réfléchir. Prenez une photo de ce qu&apos;il vous reste, et laissez Cookidea vous suggérer des idées adaptées.</p>
            </div>
            <div className="bg-[#1D1C22] rounded-xl p-6 text-center flex flex-col items-center border border-[#3D3A47] min-h-[300px] justify-center">
              <Image src="/calendar.png" alt="Icône calendrier" width={96} height={96} className="h-24 w-24 mb-4" />
              <h3 className="text-xl font-bold mb-2">Planifiez vos repas facilement avec le calendrier intégré</h3>
              <p className="text-gray-400">Organisez vos plats de la semaine et gagnez du temps grâce à une planification simple et intuitive.</p>
            </div>
          </div>
        </section>

        {/* Section Notre fondement */}
        <section className="py-20 max-w-3xl mx-auto">
          <div className="flex items-center gap-4 mb-8">
            <Image src="/vector-4.svg" alt="Décoration" width={40} height={40} className="h-10 w-auto" />
            <h2 className="text-3xl md:text-4xl font-bold text-white">Notre fondement</h2>
          </div>
          <div className="text-gray-300 space-y-4">
            <p>Chez Cookidea, nous concevons une application pensée pour simplifier la cuisine au quotidien.</p>
            <ul className="list-inside list-disc space-y-2 pl-4">
              <li>Sans publicités intrusives.</li>
              <li>Sans interfaces complexes ou inaccessibles.</li>
            </ul>
            <p>Pour vraiment placer l&apos;utilisateur au centre, nous nous appuyons sur les retours d&apos;utilisateurs déçus par les grandes applications déjà bien implantées sur le marché.</p>
            <p>Nous avons écouté ce qui les frustre. Et nous avons décidé de faire les choses autrement. Notre mission : proposer une expérience claire, agréable et réellement utile.</p>
            <ul className="list-inside list-disc space-y-2 pl-4">
              <li>Des suggestions basées sur les ingrédients que vous avez déjà.</li>
              <li>Un calendrier pour planifier facilement vos repas.</li>
              <li>Une touche de gamification pour progresser en s&apos;amusant.</li>
            </ul>
            <p>Et surtout, un véritable réseau social pour partager, s&apos;inspirer, et s&apos;amuser chaque jour autour de la cuisine. Cookidea est conçue pour s&apos;adapter à vos usages – pas l&apos;inverse.</p>
          </div>
        </section>

        {/* Section Soutenez le projet */}
        <section className="py-20 text-center">
          <h2 className="text-3xl md:text-4xl font-bold">Soutenez le projet et débloquez encore plus d&apos;avantages</h2>
          <p className="max-w-2xl mx-auto mt-4 text-gray-400">
            Vous voulez aller plus loin que la waitlist ? En participant à notre campagne Ulule, vous nous aidez à développer une application indépendante, sans pub ni compromis, et vous débloquez des avantages exclusifs réservés aux contributeurs.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 my-12">
            <div className="bg-[#1D1C22] p-6 rounded-lg border border-gray-800">
              <h3 className="font-bold text-lg">Accès anticipé</h3>
              <p className="text-sm text-gray-400">à certaines fonctionnalités</p>
            </div>
            <div className="bg-[#1D1C22] p-6 rounded-lg border border-gray-800">
              <h3 className="font-bold text-lg">Premium offert</h3>
              <p className="text-sm text-gray-400">Pendant 6 mois</p>
            </div>
            <div className="bg-[#1D1C22] p-6 rounded-lg border border-gray-800">
              <h3 className="font-bold text-lg">Badge Officiel</h3>
              <p className="text-sm text-gray-400">Un badge visible sur votre profil</p>
            </div>
            <div className="bg-[#1D1C22] p-6 rounded-lg border border-gray-800">
              <h3 className="font-bold text-lg">Votre nom</h3>
              <p className="text-sm text-gray-400">Affiché sur notre page de remerciement</p>
            </div>
          </div>
          <button className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gray-700 text-white font-semibold hover:bg-gray-600 transition-all">
            Nous rejoindre sur Ulule
          </button>
        </section>

        {/* Section Notre promesse */}
        <section className="py-20 max-w-3xl mx-auto">
           <div className="flex items-center gap-4 mb-12">
            <Image src="/vector-4.svg" alt="Décoration" width={40} height={40} className="h-10 w-auto" />
            <h2 className="text-3xl md:text-4xl font-bold text-white">Notre promesse envers vous</h2>
          </div>
          <ul className="space-y-4">
            <li className="flex items-start gap-3"><CheckSquare className="flex-shrink-0 text-green-400 mt-1" /><span>Des recettes inspirantes et variées pour tous les goûts, faciles à trouver et à suivre.</span></li>
            <li className="flex items-start gap-3"><CheckSquare className="flex-shrink-0 text-green-400 mt-1" /><span>Un planning de repas fluide : organisez votre semaine en quelques clics.</span></li>
            <li className="flex items-start gap-3"><CheckSquare className="flex-shrink-0 text-green-400 mt-1" /><span>Zéro gâchis : listez vos ingrédients restants, on vous propose des recettes adaptées.</span></li>
            <li className="flex items-start gap-3"><CheckSquare className="flex-shrink-0 text-green-400 mt-1" /><span>Une vraie communauté : partagez vos trouvailles et découvrez celles des autres.</span></li>
            <li className="flex items-start gap-3"><CheckSquare className="flex-shrink-0 text-green-400 mt-1" /><span>Vos objectifs avant tout : filtrez les recettes selon votre régime – grossir, perdre du poids, etc.</span></li>
            <li className="flex items-start gap-3"><CheckSquare className="flex-shrink-0 text-green-400 mt-1" /><span>Motivation au quotidien : suivez vos progrès et célébrez vos bons choix grâce à nos récompenses.</span></li>
            <li className="flex items-start gap-3"><CheckSquare className="flex-shrink-0 text-green-400 mt-1" /><span>Confort d&apos;utilisation : interface claire, mode sombre pour cuisiner même tard le soir.</span></li>
          </ul>
        </section>
        
        {/* Section "Rejoignez-nous" */}
        <section className="py-20">
          <div className="bg-[#1D1C22] rounded-xl p-8 md:p-12 border border-[#3D3A47]">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="text-center md:text-left">
                <h2 className="text-3xl md:text-4xl font-bold">Rejoignez-nous</h2>
                <p className="mt-4 text-gray-300">
                  Rejoignez la waitlist et recevez le <span className="font-bold text-white">badge Fondateur</span> réservé aux premiers membres de la communauté.
                  Profitez aussi de <span className="font-bold text-white">6 mois de Premium offerts</span> dès la sortie pour débloquer toutes les fonctionnalités sans limite.
                  Une manière de vous remercier pour la confiance et de vous donner une vraie place dans le lancement.
                </p>
                <form
                  action="https://formspree.io/f/mgvyjyrn"
                  method="POST"
                  className="flex flex-col sm:flex-row items-center gap-2 mt-8"
                >
                  <input
                    type="email"
                    name="email"
                    placeholder="votre@email.com"
                    className="w-full px-4 py-2 rounded-md bg-[#121212] border border-gray-700 text-white"
                  />
                  <button
                    type="submit"
                    className="flex-shrink-0 w-full sm:w-auto px-6 py-2 rounded-md bg-[#FF7A86] text-black font-semibold">
                    Rejoindre la waitlist
                  </button>
                </form>
              </div>
              <div className="flex justify-center">
                <Image src="/support-badge.png" alt="Badge Fondateur" width={256} height={256} className="h-64 w-64" />
              </div>
            </div>
          </div>
        </section>

        {/* Section FAQ */}
        <section className="py-20 max-w-3xl mx-auto">
          <FaqItem question="Est-ce que je dois savoir cuisiner ?">
            Pas du tout. Cookidea est pensée pour tous les niveaux. Que tu sois débutant ou passionné, tu trouveras des idées faciles à suivre, avec des explications claires et des recettes partagées par d&apos;autres comme toi.
          </FaqItem>
          <FaqItem question="Est-ce que l'application est gratuite ?">
            Oui, les fonctionnalités de base de Cookidea seront toujours gratuites. La campagne de soutien et les offres premium optionnelles nous permettront de maintenir l&apos;application sans publicité.
          </FaqItem>
          <FaqItem question="Cookidea fonctionne-t-elle sans connexion internet ?">
            Une connexion est requise pour découvrir de nouvelles recettes et interagir avec la communauté. Cependant, les recettes que vous avez sauvegardées et votre planning seront accessibles hors ligne.
          </FaqItem>
          <FaqItem question="Comment proposer une amélioration ou un retour ?">
            Nous serons très à l&apos;écoute ! Un lien &quot;Feedback&quot; sera présent dans l&apos;application pour nous envoyer directement vos idées et suggestions.
          </FaqItem>
          <FaqItem question="Cookidea est-elle adaptée aux débutants ?">
            Absolument. Chaque recette indiquera un niveau de difficulté, et nous mettrons en avant des recettes simples et rapides pour ceux qui commencent.
          </FaqItem>
           <FaqItem question="Les ingrédients sont-ils affichés avec les quantités ?">
            Oui, chaque recette détaille la liste complète des ingrédients avec les quantités précises pour vous faciliter la préparation et les courses.
          </FaqItem>
        </section>
        
      </div>

      {/* Footer final */}
      <footer className="bg-[#1D1C22] text-gray-400">
        <div className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="space-y-4">
              <h3 className="font-bold text-white">Title</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white">Text clickable</a></li>
                <li><a href="#" className="hover:text-white">Text clickable</a></li>
                <li><a href="#" className="hover:text-white">Text clickable</a></li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="font-bold text-white">Title</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white">Text clickable</a></li>
                <li><a href="#" className="hover:text-white">Text clickable</a></li>
                <li><a href="#" className="hover:text-white">Text clickable</a></li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="font-bold text-white">Title</h3>
              <ul className="space-y-2">
                <li><a href="#" className="hover:text-white">Text clickable</a></li>
                <li><a href="#" className="hover:text-white">Text clickable</a></li>
                <li><a href="#" className="hover:text-white">Text clickable</a></li>
              </ul>
            </div>
            <div className="space-y-4">
              <p className="font-medium text-white">Soyez avertis lors de la sortie de Cookidea, gagnez un badge pour vous démarquer et 6 mois premium !</p>
              <form
                action="https://formspree.io/f/mgvyjyrn"
                method="POST"
                className="flex items-center gap-2"
              >
                <input
                  type="email"
                  name="email"
                  placeholder="votre@email.com"
                  className="w-full px-4 py-2 rounded-md bg-[#121212] border border-gray-700 text-white"
                />
                <button
                  type="submit"
                  className="px-4 py-2 rounded-md bg-[#FF7A86] text-black font-semibold"
                >
                  Rejoindre
                </button>
              </form>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-800 text-center text-sm">
            <p>&copy; {new Date().getFullYear()} Cookidea. Tous droits réservés.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
