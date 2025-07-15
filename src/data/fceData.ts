import type { Category } from '../types';

export const fceCategories: Category[] = [
  {
    name: "Risques Humains",
    fces: [
      { id: "h1", name: "Manque de formation ou d’expérience managériale des salariés repreneurs", mitigation: "Prévoir des formations en gestion d’entreprise coopérative pour les salariés repreneurs (avec l’appui de l’URSCOP ou d’un organisme de formation)." },
      { id: "h2", name: "Absence de leadership clair au sein de l’équipe repreneuse", mitigation: "Désigner un leader ou un coordinateur d’équipe dès le départ afin de donner une direction claire au projet (le leadership se révèle parfois après la prise de fonction)." },
      { id: "h3", name: "Conflits internes ou mésententes entre salariés, pouvant faire éclater l’équipe", mitigation: "Mettre en place des règles de gouvernance participative claires et recourir à une médiation externe (par exemple via l’expert-comptable ou l’URSCOP) en cas de tensions majeures pour résoudre les conflits." },
      { id: "h4", name: "Difficulté du dirigeant cédant à lâcher prise ou à céder le contrôle de l’entreprise", mitigation: "Organiser un transfert progressif des savoir-faire et fixer une période d’accompagnement limitée pour le dirigeant cédant, afin de faciliter son désengagement." },
      { id: "h5", name: "Perte de motivation ou démobilisation des salariés après l’euphorie initiale de la reprise", mitigation: "Maintenir l’engagement par un suivi régulier (réunions d’équipe, points d’avancement en COPIL) et valoriser les réussites pour entretenir la motivation sur la durée." },
      { id: "h6", name: "Réticence de certains salariés à assumer les nouvelles responsabilités d’associés", mitigation: "Proposer un accompagnement individuel (mentorat ou coaching) pour aider ces salariés à prendre confiance dans leurs nouvelles fonctions et responsabilités." },
      { id: "h7", name: "Manque de cohésion d’équipe ou de vision partagée du projet coopératif", mitigation: "Organiser des ateliers participatifs (séminaire d’équipe) pour construire une vision commune et renforcer la cohésion autour du projet coopératif." },
      { id: "h8", name: "Départ de salariés clés avant ou pendant la transition de l’entreprise", mitigation: "Mettre en place des incitations à rester (plan de fidélisation, communication transparente sur le projet) et identifier des remplaçants internes potentiels pour pallier le départ de personnes clés." },
      { id: "h9", name: "Méfiance ou faible adhésion d’une partie du personnel au modèle coopératif", mitigation: "Mener des sessions d’information internes sur le fonctionnement et les avantages des Scop (éventuellement avec l’intervention de l’URSCOP) afin de lever les appréhensions." },
      { id: "h10", name: "Surmenage de l’équipe dirigeante salariée identifiée pouvant entraîner épuisement ou erreurs de gestion", mitigation: "Répartir les charges de travail en délégant certaines tâches, et solliciter du renfort (recrutement ou support externe) pour éviter l’épuisement des dirigeants ayant une double casquette." },
      { id: "h11", name: "Communication interne insuffisante alimentant incompréhensions, rumeurs ou perte de confiance", mitigation: "Mettre en place un plan de communication interne (réunions d’information périodiques, lettre interne, tableaux d’affichage) pour assurer la transparence et prévenir les malentendus." },
      { id: "h12", name: "Manque de maturité entrepreneuriale collective et d’esprit d’initiative au sein de l’équipe", mitigation: "Encourager la prise d’initiative par des formations à l’entrepreneuriat collectif et en responsabilisant chaque membre sur des projets concrets au sein de la coopérative." },
      { id: "h13", name: "Rejet de l’idée d’un accompagnement humain (mentorat, coaching) pour guider les nouveaux dirigeants", mitigation: "Sensibiliser l’équipe dirigeante aux bénéfices du mentorat en partageant des retours d’expérience réussis et en proposant un mentor issu du réseau coopératif pour les guider. Mobiliser les équipes du cabinet pour assurer un support comptable et financier." },
      { id: "h14", name: "Conflits générationnels ou culturels entre les ressources humaines de l’entreprise", mitigation: "Organiser des ateliers d’échanges intergénérationnels et interculturels pour améliorer la compréhension mutuelle et intégrer les différences comme une richesse pour l’équipe." },
      { id: "h15", name: "Problèmes de confiance mutuelle entre associés cédants, freinant la prise de décisions commune de la transmission", mitigation: "Établir un protocole d’accord clair entre les cédants et les repreneurs, et éventuellement faire appel à un tiers neutre (conseiller URSCOP ou médiateur) pour faciliter le dialogue et la confiance lors des décisions de transmission du top management avant la cession." },
    ],
  },
{
    name: "Risques Commerciaux",
    fces: [
      {
        id: "c1",
        name: "Perte de clients importants, inquiets par le changement de structure et de gouvernance de l’entreprise",
        mitigation: "Anticiper ce risque en informant personnellement les clients clés de la continuité de l’activité et de l’équipe, et les rassurer sur le fait que la transformation en Scop n’affecte pas le service délivré. Rassurer les tiers par l’explication du retrait progressif du cédant.",
      },
      {
        id: "c2",
        name: "Rupture de relations avec des fournisseurs stratégiques à la suite de la transmission",
        mitigation: "Sécuriser les fournisseurs critiques en communiquant en amont sur le projet de reprise et, si possible, en signant des accords de partenariat ou des contrats cadre garantissant le maintien des commandes après la transition.",
      },
      {
        id: "c3",
        name: "Dégradation temporaire de la qualité des services ou des produits pendant la phase de transition",
        mitigation: "Mettre en place un contrôle qualité renforcé pendant la période de transition et prévoir éventuellement une assistance technique supplémentaire pour maintenir le niveau de qualité attendu par les clients.",
      },
      {
        id: "c4",
        name: "Désorganisation opérationnelle due à la redistribution des rôles et fonctions au sein de l’entreprise",
        mitigation: "Préparer un organigramme fonctionnel détaillé avant la reprise, définir précisément les nouvelles responsabilités de chacun (outil 29), et s’appuyer sur le COPIL pour coordonner la transition et éviter les chevauchements ou les vides de fonction.",
      },
      {
        id: "c5",
        name: "Difficulté à prendre des décisions rapides dans un modèle de gestion plus collectif et participatif",
        mitigation: "Définir des processus de décision clairs, par exemple en créant un comité restreint habilité à prendre des décisions urgentes (sous l’autorité du COPIL), afin de concilier réactivité et fonctionnement démocratique.",
      },
      {
        id: "c6",
        name: "Manque d’expérience des repreneurs en développement commercial, marketing ou négociation client",
        mitigation: "Se faire accompagner sur ces aspects par des experts externes (formations courtes via la CCI ou l’URSCOP, mentorat par un entrepreneur expérimenté) pour monter en compétence en prospection, marketing et négociation.",
      },
      {
        id: "c7",
        name: "Concurrence accrue ou arrivée de nouveaux acteurs non anticipée sur le marché post-reprise",
        mitigation: "Instaurer une veille concurrentielle dès le début de la Scop afin de détecter rapidement l’arrivée de nouveaux concurrents et d’ajuster la stratégie commerciale (offre, tarifs, différenciation) en conséquence.",
      },
      {
        id: "c8",
        name: "Conjoncture économique défavorable impactant l’activité de la coopérative après la transmission",
        mitigation: "Élaborer des scénarios prévisionnels incluant des hypothèses de baisse d’activité et mettre en place un plan de contingence (réduction de coûts non essentiels, diversification des marchés) pour pouvoir réagir en cas de retournement conjoncturel.",
      },
      {
        id: "c9",
        name: "Dépendance excessive à un client ou un marché unique, amplifiant le risque de perte de chiffre d’affaires",
        mitigation: "Diversifier la base de clientèle et les secteurs d’activité en ciblant de nouveaux marchés ou segments clients dès les premiers exercices, de manière à réduire progressivement la part du principal client dans le chiffre d’affaires.",
      },
      {
        id: "c10",
        name: "Surcroît de travail initial pour les salariés associés, pouvant entraîner une baisse de productivité et de qualité",
        mitigation: "Équilibrer la charge de travail en priorisant les tâches critiques et en reportant ce qui peut l’être, voire recruter temporairement du renfort (intérimaires, CDD) pour passer le pic d’activité lié à la transition sans épuiser les salariés.",
      },
      {
        id: "c11",
        name: "Communication insuffisante sur le changement de statut auprès des partenaires, créant incertitude chez clients et fournisseurs",
        mitigation: "Mettre en œuvre un plan de communication externe pour annoncer la transformation en Scop (newsletter, rencontres, communiqués) en soulignant la continuité de l’entreprise et les atouts du nouveau statut, afin de dissiper les incertitudes des clients et fournisseurs.",
      },
      {
        id: "c12",
        name: "Image négative ou préjugés liés au statut Scop, faisant craindre une fragilité de l’entreprise aux yeux de l’extérieur",
        mitigation: "Valoriser l’image de la coopérative en communiquant sur sa solidité et ses atouts (gouvernance stable, salariés engagés, pérennité accrue) et en s’appuyant sur l’URSCOP pour partager des exemples de succès de Scop similaires afin de contrer les préjugés.",
      },
      {
        id: "c13",
        name: "Perturbations logistiques ou productives lors de la mise en place de la nouvelle organisation interne",
        mitigation: "Planifier une transition progressive des processus organisationnels (avec éventuellement une phase de double fonctionnement ancien/nouveau) et prévoir des solutions temporaires pour la logistique afin d’assurer la continuité de la production pendant le changement d’organisation.",
      },
      {
        id: "c14",
        name: "Maintien de méthodes de travail inefficaces par inertie, faute de remise en question immédiate des anciennes pratiques",
        mitigation: "Profiter de la reprise pour instaurer une culture d’amélioration continue (ateliers Lean, brainstorming d’équipe sur les améliorations) et éventuellement faire intervenir un consultant opérationnel afin d’identifier et corriger rapidement les pratiques les moins efficaces. Création de commission de réflexion afin d’être dans une démarche d’entreprise apprenante.",
      },
      {
        id: "c15",
        name: "Absence de plan de continuité d’activité pour faire face aux imprévus opérationnels durant la transition",
        mitigation: "Élaborer un plan de continuité d’activité dès le début de la Scop, prévoyant les mesures d’urgence en cas de panne, d’absence de personnel clé ou autre incident, afin d’assurer que l’entreprise puisse continuer à fonctionner même en cas d’aléa majeur pendant la période de transition. Assurance homme clé sur la tête des dirigeants à envisager.",
      },
    ],
  },
  {
    name: "Risques Financiers",
    fces: [
        { id: "f1", name: "Montage financier inadapté ou mal calibré lors de la reprise", mitigation: "Faire valider et ajuster le plan de financement par un expert (expert-comptable ou conseiller URSCOP) afin de garantir un montage financier cohérent avec le projet." },
        { id: "f2", name: "Difficultés d’estimation des besoins de trésorerie pour faire fonctionner l’entreprise après la reprise", mitigation: "Établir un plan de trésorerie prévisionnel prudent sur 12-18 mois, avec l’aide d’un expert-comptable, pour anticiper les besoins en fonds de roulement et éviter les pénuries de cash." },
        { id: "f3", name: "Surévaluation de l’entreprise menant à un prix de cession trop élevé pour les repreneurs", mitigation: "Faire réaliser une évaluation indépendante de l’entreprise et négocier le prix de cession sur des bases réalistes (épaulé par un expert-comptable ou un conseiller en transmission) pour éviter une charge financière excessive." },
        { id: "f4", name: "Difficulté à obtenir des financements bancaires ou des garanties suffisantes pour boucler le rachat", mitigation: "Mobiliser les outils financiers du Mouvement Scop (prêt participatif Socoden, garantie Sofiscop) et solliciter les partenaires financiers habituels des coopératives afin de rassurer les banques et compléter le financement. Prévoir une transmission par la présence d’investisseur extérieur prévu par la Scop d’amorçage." },
        { id: "f5", name: "Absence de fonds propres suffisants pour absorber les imprévus ou investir dans le renouvellement productif", mitigation: "Renforcer les fonds propres en sollicitant une augmentation de capital (via l’entrée de partenaires coopératifs comme Scopinvest) et conserver une part des bénéfices en réserves pour servir de matelas de sécurité. Investissement en crédit-bail afin de na pas alourdir les ratios dettes/CP." },
        { id: "f6", name: "Charges de reprise et coûts de transition pesant lourdement sur la rentabilité de la nouvelle Scop", mitigation: "Étaler dans le temps les coûts exceptionnels liés à la reprise (quand c’est possible) et rechercher des aides temporaires (par exemple aides régionales à la reprise outil 34) pour soulager la trésorerie initiale de la Scop." },
        { id: "f7", name: "Faible apport financier des salariés, limitant le capital social et la capacité d’investissement de la Scop", mitigation: "Compléter le capital social par des financements externes solidaires (fonds d’amorçage coopératifs, socio-financement, Scopinvest) afin d’augmenter la capacité d’investissement de la coopérative." },
        { id: "f8", name: "Coûts de restructuration ou d’investissement initial non prévus, déséquilibrant le plan financier", mitigation: "Intégrer une provision pour imprévus dans le business plan et prioriser les investissements essentiels, en revoyant le plan financier avec l’expert-comptable dès qu’un nouveau coût important apparaît." },
        { id: "f9", name: "Mauvaise gestion financière ou absence de suivi budgétaire rigoureux après la transmission", mitigation: "Mettre en place un suivi budgétaire mensuel et des indicateurs de gestion (chiffre d’affaires, marges, trésorerie) pilotés par l’expert-comptable ou le directeur financier, afin de détecter rapidement les dérives et corriger le tir." },
        { id: "f10", name: "Investissements urgents reportés faute de moyens, pénalisant l’outil de production et la compétitivité", mitigation: "Identifier les investissements critiques pour la production et rechercher des solutions de financement dédiées (leasing, subventions, prêts bancaires à moyen terme) pour les réaliser sans attendre une dégradation de la compétitivité." },
        { id: "f11", name: "Retards de paiement de clients ou défaillances de fournisseurs aggravant la trésorerie", mitigation: "Mettre en place une gestion préventive de la trésorerie en sécurisant les paiements (relances clients, assurance-crédit, factor) et en diversifiant les fournisseurs pour limiter l’impact d’une défaillance sur l’activité." },
        { id: "f12", name: "Structure de capital instable durant la période transitoire de Scop d’amorçage, générant des incertitudes", mitigation: "Formaliser un plan de montée progressive des salariés au capital durant la Scop d’amorçage, avec un calendrier clair de rachat des parts de l’associé non salarié, afin de stabiliser la structure capitalistique sur la période transitoire." },
        { id: "f13", name: "Risque de non-atteinte du seuil de participation majoritaire des salariés dans le délai imparti (7 ans), menaçant le statut coopératif", mitigation: "Planifier le rachat de la majorité du capital par les salariés sur la période de 7 ans (via des augmentations de capital annuelles ou rachats échelonnés), de sorte à respecter l’échéance légale de la Scop d’amorçage." },
        { id: "f14", name: "Outil productif vieillissant nécessitant un renouvellement significatif à court terme", mitigation: "Élaborer dès la reprise un plan d’investissement pour moderniser l’outil de production (calendrier de remplacement des équipements obsolètes) et rechercher activement des financements (emprunts, aides publiques à l’investissement) pour réaliser ces améliorations à court terme. Négociation à la baisse du prix de cession." },
    ],
  },
 {
    name: "Risques Juridiques",
    fces: [
      {
        id: "j1",
        name: "Retards ou erreurs dans les formalités légales de transformation (immatriculation, modifications statutaires, etc.)",
        mitigation: "Se faire assister d’un juriste ou de l’URSCOP pour réaliser les formalités de transformation dans les délais et s’assurer que tous les documents légaux (statuts mis à jour, immatriculation en Scop) soient correctement déposés. (outil 11 Matrice RACI)",
      },
      {
        id: "j2",
        name: "Litiges potentiels avec le cédant ou entre associés concernant les clauses du contrat de cession",
        mitigation: "Faire relire et valider le protocole de cession par un avocat spécialisé avant signature, et inclure des clauses claires de règlement des litiges (médiation, arbitrage) afin de prévenir ou résoudre d’éventuels différends ultérieurs.",
      },
      {
        id: "j3",
        name: "Difficultés d’application des accords collectifs ou des contrats de travail après le changement de statut",
        mitigation: "Consulter un expert en droit social pour adapter les accords d’entreprise et contrats de travail au nouveau contexte coopératif, de manière à respecter les droits acquis des salariés tout en tenant compte des spécificités du statut Scop.",
      },
      {
        id: "j4",
        name: "Cadre réglementaire sectoriel peu adapté, compliquant la transformation de l’entreprise en Scop",
        mitigation: "Solliciter l’appui de l’URSCOP et de la fédération professionnelle du secteur pour identifier les aménagements ou dérogations possibles, et adapter la transformation en conformité avec la réglementation sectorielle (voire mener des actions de plaidoyer si nécessaire).",
      },
      {
        id: "j5",
        name: "Alourdissement des démarches administratives (assemblées générales fréquentes, rapports obligatoires) pesant sur la gestion courante",
        mitigation: "Anticiper ces obligations en établissant un calendrier annuel des échéances statutaires (AG, rapports) et en formant une personne ou un comité interne pour gérer spécifiquement ces aspects administratifs, afin de décharger le reste de l’équipe dirigeante.",
      },
      {
        id: "j6",
        name: "Reprise de passifs cachés (dettes, contentieux) non identifiés avant la transmission, générant des obligations imprévues",
        mitigation: "Réaliser un audit d’acquisition approfondi (due diligence) avant la reprise pour faire ressortir tous les passifs éventuels, et inclure dans le contrat de cession une clause de garantie d’actif-passif protégeant la Scop en cas de découverte ultérieure de dettes ou de contentieux.",
      },
      {
        id: "j7",
        name: "Ambiguïtés dans la gouvernance (statuts imprécis sur les pouvoirs et rôles) pouvant conduire à des blocages décisionnels",
        mitigation: "Rédiger des statuts et un règlement intérieur définissant clairement les rôles de chaque instance (gérant, conseil d’administration, assemblée, etc.) et faire valider ces documents par un juriste spécialiste des coopératives pour éviter toute imprécision qui paralyserait la prise de décision.",
      },
      {
        id: "j8",
        name: "Statut des dirigeants salariés mal défini, créant une confusion entre mandat social et contrat de travail",
        mitigation: "Clarifier le statut des dirigeants dans l’entreprise en distinguant bien leur contrat de travail de leur mandat social (par exemple, en définissant dans les statuts les modalités du mandat de dirigeant salarié) et consulter un juriste pour mettre en conformité la situation contractuelle.",
      },
      {
        id: "j9",
        name: "Clauses de changement de contrôle dans les contrats commerciaux entraînant des résiliations imprévues après la cession",
        mitigation: "Passer en revue l’ensemble des contrats clients et fournisseurs à la recherche de clauses de changement de contrôle, informer en amont les partenaires de la reprise envisagée, et négocier des avenants ou lettres d’accord pour assurer la continuité des contrats après la transformation en Scop.",
      },
      {
        id: "j10",
        name: "Non-respect des obligations d’information et de consultation des instances représentatives du personnel lors de la transmission",
        mitigation: "Respecter scrupuleusement la procédure légale d’information-consultation du CSE (ou des délégués du personnel) en les impliquant le plus tôt possible dans le projet de transmission, afin de se conformer au Code du travail et d’éviter tout recours ultérieur.",
      },
      {
        id: "j11",
        name: "Erreurs dans la gestion fiscale spécifique au régime coopératif (réserve légale, participation, impôts)",
        mitigation: "S’appuyer sur l’expert-comptable maîtrisant le régime fiscal des Scop pour assurer la conformité fiscale, par exemple en affectant correctement le pourcentage requis des bénéfices en réserve légale impartageable chaque année.",
      },
      {
        id: "j12",
        name: "Mauvaise tenue des registres et documents obligatoires (registre des associés, comptes annuels), exposant la Scop à des sanctions administratives",
        mitigation: "Mettre en place une gestion administrative rigoureuse dès la création de la Scop en tenant à jour le registre des associés, en réalisant les assemblées générales dans les formes et délais légaux, et en déposant les comptes annuels à temps, éventuellement avec l’appui du cabinet comptable pour les formalités.",
      },
    ],
  },
   {
    name: "Risques Techniques",
    fces: [
      {
        id: "t1",
        name: "Obsolescence des équipements ou technologies non résolue faute d’investissements suffisants",
        mitigation: "Élaborer un programme d’investissement technologique pour renouveler progressivement les équipements obsolètes et éviter les pannes, en recherchant des financements dédiés (subventions à la modernisation, crédit-bail, etc.) pour soutenir ces investissements.",
      },
      {
        id: "t2",
        name: "Perte de savoir-faire technique suite au départ du fondateur ou de personnels clés de l’entreprise",
        mitigation: "Anticiper ce départ en organisant un transfert de connaissances (documentation des procédures, formation en tutorat des salariés par le cédant) afin de conserver le savoir-faire critique dans l’entreprise.",
      },
      {
        id: "t3",
        name: "Manque de compétences numériques ou technologiques au sein de l’équipe repreneuse",
        mitigation: "Identifier les lacunes techniques de l’équipe et mettre en place des formations ciblées (outils numériques, nouveaux process) voire recruter des compétences externes, avec l’aide éventuelle de dispositifs de formation de l’URSCOP ou de l’OPCO, pour monter en compétence rapidement.",
      },
      {
        id: "t4",
        name: "Systèmes d’information inadaptés ou défaillants perturbant la gestion de l’entreprise après la reprise",
        mitigation: "Réaliser un audit des systèmes d’information dès la reprise et déployer les mises à niveau nécessaires (nouveau logiciel de gestion spécifique Scop, infrastructure IT modernisée) afin d’assurer la continuité et l’efficacité de la gestion administrative et opérationnelle.",
      },
      {
        id: "t5",
        name: "Failles de cybersécurité non corrigées, exposant la coopérative à des incidents majeurs (piratage, perte de données)",
        mitigation: "Procéder à un diagnostic de cybersécurité et mettre en œuvre un plan de sécurisation pour protéger l’entreprise des cyber-risques.",
      },
      {
        id: "t6",
        name: "Non-transmission de procédures techniques critiques ou de secrets de fabrication lors du départ de l’ancien dirigeant",
        mitigation: "Exiger du dirigeant sortant la formalisation par écrit des procédures et secrets de fabrication importants, et organiser des sessions de transmission où il forme activement les repreneurs sur ces points avant son départ effectif.",
      },
      {
        id: "t7",
        name: "Insuffisance de formation technique des salariés aux nouveaux outils, process ou réglementations",
        mitigation: "Planifier des sessions de formation continue pour les salariés sur les nouvelles technologies et réglementations dès qu’elles apparaissent, en s’appuyant sur les centres de formation professionnels ou le réseau URSCOP pour les modules spécifiques (formations techniques).",
      },
      {
        id: "t8",
        name: "Difficulté à maintenir la qualité technique des produits ou services sans l’expertise initiale du cédant",
        mitigation: "Mettre en place un système d’assurance qualité solide (contrôles réguliers, documentation technique à jour) et, si besoin, recourir à un consultant technique externe ou à l’appui d’anciens de l’entreprise pour valider que les standards de qualité sont bien conservés.",
      },
      {
        id: "t9",
        name: "Projets d’innovation ou de R&D abandonnés ou retardés, ce qui freine le développement de nouveaux produits",
        mitigation: "Désigner un responsable de l’innovation en interne ou créer une cellule R&D coopérative, et éventuellement nouer des partenariats avec des laboratoires, écoles ou autres Scop innovantes, afin de poursuivre les projets R&D prioritaires et d’en initier de nouveaux.",
      },
      {
        id: "t10",
        name: "Maintenance des installations négligée, entraînant pannes, accidents ou arrêts de production",
        mitigation: "Instaurer un plan de maintenance préventive avec un calendrier régulier d’entretien des équipements, en allouant un budget et des ressources dédiées à la maintenance pour éviter les arrêts imprévus et prolonger la durée de vie du matériel prévu dans le prévisionnel.",
      },
      {
        id: "t11",
        name: "Non-conformité aux normes techniques ou de sécurité faute de suivi et de mise à jour",
        mitigation: "Effectuer des audits de conformité périodiques (sécurité machine, normes ISO, réglementation sectorielle) et mettre rapidement en œuvre les mises aux normes nécessaires, en formant le personnel aux exigences de sécurité et en désignant un référent qualité/sécurité au sein de l’entreprise.",
      },
      {
        id: "t12",
        name: "Incapacité à adapter les processus de production aux évolutions du marché ou de la demande client",
        mitigation: "Adopter une démarche d’amélioration continue (par exemple méthode Agile ou Lean) permettant d’ajuster régulièrement les processus, et réaliser une veille marché pour identifier les nouvelles attentes clients afin d’adapter l’outil de production en conséquence (nouveaux produits, personnalisations, flexibilisation).",
      },
      {
        id: "t13",
        name: "Dépendance critique à un fournisseur, un outil ou une technologie sans solution de rechange en cas de défaillance",
        mitigation: "Mettre en place un plan B en diversifiant les fournisseurs stratégiques et en identifiant des alternatives technologiques (outils ou logiciels de secours), de sorte qu’en cas de défaillance de la ressource principale, la production puisse se poursuivre avec une solution de rechange.",
      },
      {
        id: "t14",
        name: "Gestion défaillante des stocks ou des approvisionnements techniques pendant la transition, perturbant la production",
        mitigation: "Optimiser la gestion des stocks en implantant un outil de suivi des inventaires et en définissant des stocks de sécurité sur les composants critiques, tout en coordonnant étroitement les approvisionnements pendant la transition pour éviter les ruptures qui pénaliseraient la production.",
      },
    ],
  },
 {
    name: "Risques Stratégiques",
    fces: [
      {
        id: "s1",
        name: "Absence de plan stratégique clair pour l’entreprise une fois la reprise effectuée",
        mitigation: "Élaborer dès les premiers mois un plan stratégique pluriannuel définissant les objectifs de développement de la Scop et les moyens pour y parvenir, éventuellement avec l’appui de conseillers de l’URSCOP pour structurer cette feuille de route stratégique.",
      },
      {
        id: "s2",
        name: "Vision à long terme floue ou non partagée entre les nouveaux associés dirigeants",
        mitigation: "Organiser des séminaires stratégiques ou réunions de travail au niveau du COPIL afin de co-construire une vision à long terme commune et aligner tous les dirigeants sur les mêmes orientations et valeurs.",
      },
      {
        id: "s3",
        name: "Difficulté à s’adapter aux évolutions du marché ou aux nouvelles tendances par manque d’anticipation stratégique",
        mitigation: "Mettre en place une veille stratégique (études de marché régulières, suivi des tendances consommateurs, analyse de la concurrence) et procéder à des revues stratégiques périodiques pour ajuster le positionnement de l’entreprise en fonction des évolutions externes.",
      },
      {
        id: "s4",
        name: "Poursuite inchangée de la stratégie du cédant malgré un contexte différent nécessitant des ajustements",
        mitigation: "Réévaluer la stratégie héritée du cédant à la lumière du nouvel environnement (marché, organisation coopérative) et apporter les ajustements nécessaires, en sollicitant si besoin un regard externe (conseiller URSCOP ou consultant en stratégie) pour adapter la feuille de route aux réalités actuelles.",
      },
      {
        id: "s5",
        name: "Manque d’innovation ou de développement de nouveaux produits et services pour rester compétitif",
        mitigation: "Consacrer une part du temps et du budget à l’innovation (brainstorms d’équipes, veille R&D, amélioration de l’existant, commissions de réflexions) et encourager les salariés à proposer de nouvelles idées, afin d’alimenter régulièrement la création de nouveaux produits ou services et garder une longueur d’avance sur la concurrence.",
      },
      {
        id: "s6",
        name: "Positionnement de l’entreprise mal adapté face à la concurrence",
        mitigation: "Réaliser un diagnostic stratégique (étude de concurrence) pour identifier les faiblesses du positionnement actuel et repositionner l’offre de l’entreprise (en termes de gamme, prix, image de marque) de manière à mieux se différencier sur le marché.",
      },
      {
        id: "s7",
        name: "Opportunités de croissance ou de diversification non exploitées (trop de prudence ou manque de compétences pour les saisir)",
        mitigation: "Mettre en place un processus de détection et d’étude des nouvelles opportunités (veille opportunités, retours terrain des commerciaux) et, en cas de manque de compétences en interne pour les exploiter, nouer des partenariats ou se former afin de pouvoir diversifier l’activité quand une opportunité pertinente se présente.",
      },
      {
        id: "s8",
        name: "Stratégie commerciale insuffisamment offensive pour conquérir de nouveaux clients ou marchés",
        mitigation: "Définir une stratégie commerciale plus proactive en fixant des objectifs de conquête de nouveaux clients (prospection, marketing digital, réponse à des appels d’offres) et en suivant régulièrement ces objectifs au COPIL, tout en ajustant les actions commerciales en fonction des résultats obtenus.",
      },
      {
        id: "s9",
        name: "Divergences stratégiques entre futurs associés (désaccords sur les orientations majeures de l’entreprise)",
        mitigation: "Mettre en place un cadre formel de décision stratégique (par exemple, un comité stratégique incluant les principaux cadres stratégiques ou un processus de vote en AG sur les grandes orientations) afin de gérer démocratiquement les divergences et d’aboutir à un consensus sur les décisions engageant l’avenir de l’entreprise.",
      },
      {
        id: "s10",
        name: "Focalisation excessive sur les enjeux internes coopératifs au détriment de la réactivité face au marché",
        mitigation: "Équilibrer le temps consacré à la vie coopérative interne (réunions, processus démocratiques) avec un focus sur le client et le marché, en définissant des indicateurs orientés clients/marché et en responsabilisant une équipe ou un responsable du développement commercial qui assure une veille et une réactivité aux demandes du marché.",
      },
      {
        id: "s11",
        name: "Manque de flexibilité dans la prise de décision stratégique à cause de processus collectifs plus lents",
        mitigation: "Adapter la gouvernance pour plus d’agilité en autorisant, par exemple, un comité de direction restreint à prendre certaines décisions stratégiques entre deux assemblées générales, sous réserve de ratification ultérieure, afin de pouvoir agir rapidement tout en respectant l’esprit participatif.",
      },
      {
        id: "s12",
        name: "Absence d’indicateurs de performance et de suivi pour piloter efficacement la nouvelle entité",
        mitigation: "Mettre en place des indicateurs de performance clés (financiers, commerciaux, RH) et un tableau de bord partagé, puis effectuer un suivi régulier en comité de pilotage pour mesurer l’atteinte des objectifs et ajuster la gestion de l’entreprise en temps réel.",
      },
      {
        id: "s13",
        name: "Pas de préparation pour l’après « Scop d’amorçage » (fin de la période de 7 ans) et les évolutions structurelles à venir",
        mitigation: "Anticiper la sortie du statut de Scop d’amorçage en définissant à l’avance la structure capitalistique finale visée (salariés majoritaires), les modalités de rachat des parts de l’associé non-salarié et l’évolution de la gouvernance, puis enclencher ces démarches bien avant l’échéance des 7 ans pour une transition en douceur.",
      },
      {
        id: "s14",
        name: "Sous-estimation de la concurrence ou de nouveaux modèles économiques, entraînant une réponse tardive de l’entreprise",
        mitigation: "Maintenir une veille active sur la concurrence et les modèles émergents (abonnement à des études sectorielles, participation à des réseaux professionnels, retours des clients) afin de pouvoir identifier rapidement les menaces ou disruptions potentielles et adapter la stratégie de l’entreprise en conséquence, avant d’être dépassé.",
      },
    ],
  },
];
