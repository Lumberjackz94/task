"use strict";(self.webpackChunktaskfile_dev=self.webpackChunktaskfile_dev||[]).push([[643],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return k}});var r=t(7294);function s(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){s(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,s=function(e,n){if(null==e)return{};var t,r,s={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(s[t]=e[t]);return s}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(s[t]=e[t])}return s}var o=r.createContext({}),u=function(e){var n=r.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=u(e.components);return r.createElement(o.Provider,{value:n},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,s=e.mdxType,a=e.originalType,o=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(t),m=s,k=d["".concat(o,".").concat(m)]||d[m]||p[m]||a;return t?r.createElement(k,i(i({ref:n},c),{},{components:t})):r.createElement(k,i({ref:n},c))}));function k(e,n){var t=arguments,s=n&&n.mdxType;if("string"==typeof e||s){var a=t.length,i=new Array(a);i[0]=m;var l={};for(var o in n)hasOwnProperty.call(n,o)&&(l[o]=n[o]);l.originalType=e,l[d]="string"==typeof e?e:s,i[1]=l;for(var u=2;u<a;u++)i[u]=t[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},2158:function(e,n,t){t.r(n),t.d(n,{assets:function(){return o},contentTitle:function(){return i},default:function(){return d},frontMatter:function(){return a},metadata:function(){return l},toc:function(){return u}});var r=t(3117),s=(t(7294),t(3905));const a={slug:"/styleguide/",sidebar_position:8},i="Guide de style",l={unversionedId:"styleguide",id:"styleguide",title:"Guide de style",description:"Ceci est le guide officiel du style Task pour les fichiers Taskfile.yml. Ce guide contient quelques instructions de base pour garder votre Taskfile propre et familier \xe0 autres utilisateurs.",source:"@site/i18n/fr-FR/docusaurus-plugin-content-docs/current/styleguide.md",sourceDirName:".",slug:"/styleguide/",permalink:"/fr-FR/styleguide/",draft:!1,tags:[],version:"current",sidebarPosition:8,frontMatter:{slug:"/styleguide/",sidebar_position:8},sidebar:"tutorialSidebar",previous:{title:"FAQ",permalink:"/fr-FR/faq/"},next:{title:"Changelog",permalink:"/fr-FR/changelog/"}},o={},u=[{value:"Utiliser <code>Taskfile.yml</code> et non <code>taskfile.yml</code>",id:"utiliser-taskfileyml-et-non-taskfileyml",level:2},{value:"Utiliser les mots-cl\xe9s dans l&#39;ordre correct",id:"utiliser-les-mots-cl\xe9s-dans-lordre-correct",level:2},{value:"Utiliser 2 espaces pour l&#39;indentation",id:"utiliser-2-espaces-pour-lindentation",level:2},{value:"S\xe9parer les sections principales avec un retour \xe0 la ligne",id:"s\xe9parer-les-sections-principales-avec-un-retour-\xe0-la-ligne",level:2},{value:"Ajouter des retours \xe0 la ligne entre les t\xe2ches",id:"ajouter-des-retours-\xe0-la-ligne-entre-les-t\xe2ches",level:2},{value:"Utiliser des noms de variables en majuscule",id:"utiliser-des-noms-de-variables-en-majuscule",level:2},{value:"Ne pas mettre d&#39;espaces autour des variables lors de l&#39;utilisation",id:"ne-pas-mettre-despaces-autour-des-variables-lors-de-lutilisation",level:2},{value:"S\xe9parer les mots du nom de la t\xe2che par un tiret",id:"s\xe9parer-les-mots-du-nom-de-la-t\xe2che-par-un-tiret",level:2},{value:"Utiliser les deux-points pour nommer les namespaces de t\xe2che",id:"utiliser-les-deux-points-pour-nommer-les-namespaces-de-t\xe2che",level:2},{value:"Prefer external scripts over complex multi-line commands",id:"prefer-external-scripts-over-complex-multi-line-commands",level:2}],c={toc:u};function d(e){let{components:n,...t}=e;return(0,s.kt)("wrapper",(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"guide-de-style"},"Guide de style"),(0,s.kt)("p",null,"Ceci est le guide officiel du style Task pour les fichiers ",(0,s.kt)("inlineCode",{parentName:"p"},"Taskfile.yml"),". Ce guide contient quelques instructions de base pour garder votre Taskfile propre et familier \xe0 autres utilisateurs."),(0,s.kt)("p",null,"Il contient des directives g\xe9n\xe9rales, mais elles ne doivent pas n\xe9cessairement \xeatre strictement respect\xe9es. N'h\xe9sitez pas \xe0 proc\xe9der diff\xe9remment si vous en avez le besoin ou que vous le souhaitez. Aussi, n'h\xe9sitez pas \xe0 ","[ouvrir une issue]","(",(0,s.kt)("a",{parentName:"p",href:"https://github."},"https://github.")," com/go-task/task/issues/new/choose) ou ","[faire une pull request]","(",(0,s.kt)("a",{parentName:"p",href:"https://github."},"https://github.")," com/go-task/task/compare) pour am\xe9liorer ce guide."),(0,s.kt)("h2",{id:"utiliser-taskfileyml-et-non-taskfileyml"},"Utiliser ",(0,s.kt)("inlineCode",{parentName:"h2"},"Taskfile.yml")," et non ",(0,s.kt)("inlineCode",{parentName:"h2"},"taskfile.yml")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-yaml"},"# bad\ntaskfile.yml\n\n\n# good\nTaskfile.yml\n")),(0,s.kt)("p",null,"C'est important, surtout pour les utilisateurs Linux. Windows et MacOS ont un syst\xe8me de fichiers insensibles \xe0 la casse, donc ",(0,s.kt)("inlineCode",{parentName:"p"},"taskfile.yml")," fonctionnera, m\xeame si ce n'est pas officiellement support\xe9. Sur Linux, uniquement ",(0,s.kt)("inlineCode",{parentName:"p"},"Taskfile.yml")," fonctionnera."),(0,s.kt)("h2",{id:"utiliser-les-mots-cl\xe9s-dans-lordre-correct"},"Utiliser les mots-cl\xe9s dans l'ordre correct"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"version:")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"includes:")),(0,s.kt)("li",{parentName:"ul"},"Configuration ones, like ",(0,s.kt)("inlineCode",{parentName:"li"},"output:"),", ",(0,s.kt)("inlineCode",{parentName:"li"},"silent:"),", ",(0,s.kt)("inlineCode",{parentName:"li"},"method:")," and ",(0,s.kt)("inlineCode",{parentName:"li"},"run:")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"vars:")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"env:"),", ",(0,s.kt)("inlineCode",{parentName:"li"},"dotenv:")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"tasks:"))),(0,s.kt)("h2",{id:"utiliser-2-espaces-pour-lindentation"},"Utiliser 2 espaces pour l'indentation"),(0,s.kt)("p",null,"C'est la convention la plus courante pour les fichiers YAML et Task suit cette convention."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-yaml"},"# bad\ntasks:\n    foo:\n        cmds:\n            - echo 'foo'\n\n\n# good\ntasks:\n  foo:\n    cmds:\n      - echo 'foo'\n")),(0,s.kt)("h2",{id:"s\xe9parer-les-sections-principales-avec-un-retour-\xe0-la-ligne"},"S\xe9parer les sections principales avec un retour \xe0 la ligne"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-yaml"},"# bad\nversion: '3'\nincludes:\n  docker: ./docker/Taskfile.yml\noutput: prefixed\nvars:\n  FOO: bar\nenv:\n  BAR: baz\ntasks:\n  # ...\n\n\n# good\nversion: '3'\n\nincludes:\n  docker: ./docker/Taskfile.yml\n\noutput: prefixed\n\nvars:\n  FOO: bar\n\nenv:\n  BAR: baz\n\ntasks:\n  # ...\n")),(0,s.kt)("h2",{id:"ajouter-des-retours-\xe0-la-ligne-entre-les-t\xe2ches"},"Ajouter des retours \xe0 la ligne entre les t\xe2ches"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-yaml"},"# bad\nversion: '3'\n\ntasks:\n  foo:\n    cmds:\n      - echo 'foo'\n  bar:\n    cmds:\n      - echo 'bar'\n  baz:\n    cmds:\n      - echo 'baz'\n\n\n# good\nversion: '3'\n\ntasks:\n  foo:\n    cmds:\n      - echo 'foo'\n\n  bar:\n    cmds:\n      - echo 'bar'\n\n  baz:\n    cmds:\n      - echo 'baz'\n")),(0,s.kt)("h2",{id:"utiliser-des-noms-de-variables-en-majuscule"},"Utiliser des noms de variables en majuscule"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-yaml"},"# bad\nversion: '3'\n\nvars:\n  binary_name: myapp\n\ntasks:\n  build:\n    cmds:\n      - go build -o {{.binary_name}} .\n\n\n# good\nversion: '3'\n\nvars:\n  BINARY_NAME: myapp\n\ntasks:\n  build:\n    cmds:\n      - go build -o {{.BINARY_NAME}} .\n")),(0,s.kt)("h2",{id:"ne-pas-mettre-despaces-autour-des-variables-lors-de-lutilisation"},"Ne pas mettre d'espaces autour des variables lors de l'utilisation"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-yaml"},"# bad\nversion: '3'\n\ntasks:\n  greet:\n    cmds:\n      - echo '{{ .MESSAGE }}'\n\n\n# good\nversion: '3'\n\ntasks:\n  greet:\n    cmds:\n      - echo '{{.MESSAGE}}'\n")),(0,s.kt)("p",null,"Cette convention est aussi utilis\xe9e par la plupart des gens pour n'importe quel mod\xe8le Go."),(0,s.kt)("h2",{id:"s\xe9parer-les-mots-du-nom-de-la-t\xe2che-par-un-tiret"},"S\xe9parer les mots du nom de la t\xe2che par un tiret"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-yaml"},"# bad\nversion: '3'\n\ntasks:\n  do_something_fancy:\n    cmds:\n      - echo 'Do something'\n\n\n# good\nversion: '3'\n\ntasks:\n  do-something-fancy:\n    cmds:\n      - echo 'Do something'\n")),(0,s.kt)("h2",{id:"utiliser-les-deux-points-pour-nommer-les-namespaces-de-t\xe2che"},"Utiliser les deux-points pour nommer les namespaces de t\xe2che"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-yaml"},"# good\nversion: '3'\n\ntasks:\n  docker:build:\n    cmds:\n      - docker ...\n\n  docker:run:\n    cmds:\n      - docker-compose ...\n")),(0,s.kt)("p",null,"C'est aussi fait automatiquement quand vous incluez des Taskfiles."),(0,s.kt)("h2",{id:"prefer-external-scripts-over-complex-multi-line-commands"},"Prefer external scripts over complex multi-line commands"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-yaml"},"# bad\nversion: '3'\n\ntasks:\n  build:\n    cmds:\n      - |\n        for i in $(seq 1 10); do\n          echo $i\n          echo \"some other complex logic\"\n        done'\n\n# good\nversion: '3'\n\ntasks:\n  build:\n    cmds:\n      - ./scripts/my_complex_script.sh\n")))}d.isMDXComponent=!0}}]);