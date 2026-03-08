(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,44311,e=>{"use strict";let t={UNITY:"unity",RPG_MAKER_MZ:"rpgMakerMZ",TYRANO_SCRIPT:"tyranoScript",GODOT:"godot"},a=Object.values(t);t.UNITY,t.RPG_MAKER_MZ,t.TYRANO_SCRIPT,t.GODOT,e.s(["GAME_ENGINE",0,t,"GAME_ENGINE_VALUES",0,a])},74676,e=>{e.v({gameCanvas:"rpgmaker-mz-module__Z5t0Fa__gameCanvas",rpgMzContainer:"rpgmaker-mz-module__Z5t0Fa__rpgMzContainer"})},23857,e=>{"use strict";var t=e.i(43476),a=e.i(71645),r=e.i(3303);function n({gameData:e}){(0,a.useEffect)(()=>{if(document.getElementById("unity-dynamic-styles"))return;let e=document.createElement("style");return e.id="unity-dynamic-styles",e.textContent=`
      /* Tailwind CSS ベースリセット */
      *, ::before, ::after {
        box-sizing: border-box;
        border-width: 0;
        border-style: solid;
        border-color: currentColor;
      }

      /* Flexbox utilities */
      .flex { display: flex; }
      .justify-end { justify-content: flex-end; }
      .justify-center { justify-content: center; }
      .items-center { align-items: center; }

      /* Spacing utilities */
      .mt-2 { margin-top: 0.5rem; }
      .px-2 { padding-left: 0.5rem; padding-right: 0.5rem; }
      .py-2 { padding-top: 0.5rem; padding-bottom: 0.5rem; }

      /* Sizing utilities */
      .h-5 { height: 1.25rem; }
      .w-5 { width: 1.25rem; }

      /* Border radius */
      .rounded { border-radius: 0.25rem; }

      /* Background color - テーマ変数を使用 */
      .bg-card {
        background-color: hsl(var(--card, 0 0% 100%));
      }

      /* Dark mode support */
      @media (prefers-color-scheme: dark) {
        .bg-card {
          background-color: hsl(var(--card, 0 0% 10%));
        }
      }

      /* Hover effects */
      .hover\\:brightness-80:hover {
        filter: brightness(0.8);
      }

      /* Transitions */
      .transition-all {
        transition-property: all;
        transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
        transition-duration: 150ms;
      }

      /* Button reset */
      button {
        cursor: pointer;
        border: none;
        background: none;
        font-family: inherit;
        font-size: inherit;
      }
    `,document.head.appendChild(e),()=>{let e=document.getElementById("unity-dynamic-styles");e&&document.head.removeChild(e)}},[]);let[n,i]=(0,a.useState)(0),[s,o]=(0,a.useState)(!0),[l,d]=(0,a.useState)(null),c=(0,a.useRef)(null),u=(0,a.useRef)(null),g=e.width||1280,p=e.height||720,[h,m]=(0,a.useState)({width:g,height:p});(0,a.useEffect)(()=>{let e=()=>{let e=Math.min(window.innerWidth/g,window.innerHeight/p);m({width:Math.floor(g*e),height:Math.floor(p*e)})};return e(),window.addEventListener("resize",e),()=>{window.removeEventListener("resize",e)}},[g,p]),(0,a.useEffect)(()=>()=>{u.current&&("function"==typeof u.current.Quit?u.current.Quit().then(()=>{console.log("Unity instance quit successfully.")}).catch(e=>{console.error("Error quitting Unity instance:",e)}):console.warn("Unity instance does not have a Quit method."),u.current=null)},[]);let y={width:`${g}px`,height:`${p}px`,backgroundColor:"#f0f0f0",border:"1px dashed #ccc",display:"flex",justifyContent:"center",alignItems:"center",color:"#999",fontSize:"14px"},j={display:s||l?"none":"block",background:"#231F20",width:`${h.width}px`,height:`${h.height}px`},f=`ゲーム情報を読み込み中...`;return e?.loaderUrl&&s&&!l&&(f=`読み込み中... ${n}%`),l&&(f=l),(0,t.jsxs)(t.Fragment,{children:[e?.loaderUrl&&(0,t.jsx)(r.default,{src:e.loaderUrl,strategy:"afterInteractive",onLoad:()=>{if(!c.current){d("Canvas要素が見つかりません。"),o(!1);return}if("function"!=typeof window.createUnityInstance){d("Unityインスタンス作成関数(createUnityInstance)が見つかりません。"),o(!1);return}let t={dataUrl:e.dataUrl,frameworkUrl:e.frameworkJsUrl,codeUrl:e.wasmUrl,companyName:e.companyName||"DefaultCompany",productName:e.productName||"DefaultTitle",productVersion:e.productVersion||"1.0.0"};o(!0),d(null),window.createUnityInstance(c.current,t,e=>{i(Math.round(100*e))}).then(e=>{u.current=e,o(!1)}).catch(e=>{console.error("Unityゲームの起動エラー:",e),d(`ゲームの起動に失敗しました: ${e.message}`),o(!1)})},onError:e=>{console.error("Unityローダースクリプトの読み込みエラー:",e),d("ゲームエンジンの読み込みに失敗しました。"),o(!1)}}),(0,t.jsxs)("div",{style:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",width:"100%",height:"100vh",margin:0,padding:0,overflow:"hidden"},children:[(s||l)&&(0,t.jsx)("div",{style:y,children:(0,t.jsx)("p",{id:"loading-status",style:{textAlign:"center",padding:"20px"},children:f})}),(0,t.jsx)("canvas",{ref:c,id:"unity-canvas",style:j})]})]})}var i=e.i(74676);function s(){return(0,t.jsxs)("div",{className:i.default.rpgMzContainer,children:[(0,t.jsx)(r.default,{id:"script-loader-monitor",strategy:"beforeInteractive",children:`
    (function() {
      // document.currentScriptが有効ではない古いブラウザでパスを固定してやる
      if (!document.currentScript) {
          Object.defineProperty(document, 'currentScript', {
            value: { src: 'js/main.js' },
            writable: true
          });
      }

      // appendChild をフック
      const originalAppendChild = Element.prototype.appendChild;
      let loadingScripts = 0;
      
      // main.js が動作を開始したかフラグ
      let gameScriptsStarted = false;
      
      // Utils.encodeURIが無効化済みかフラグ
      let encodeURIDisabled = false;

      // Utils.encodeURIを無効化する関数
      function disableUtilsEncodeURI() {
        if (encodeURIDisabled) return;
        
        if (typeof Utils !== 'undefined' && Utils.encodeURI) {
          // URLエンコーディングをスキップして元の文字列をそのまま返す
          Utils.encodeURI = function(str) {
            return str;
          };
          encodeURIDisabled = true;
          console.log('[RPGMakerMZLoader] Utils.encodeURI disabled');
        }
      }

      Element.prototype.appendChild = function(node) {
        const isScript = node.tagName === 'SCRIPT' && node.src;
        
        // main.js由来か、/js/フォルダ以下のローカルスクリプトか判定
        const isGameScript = isScript && (
            node._url !== undefined || 
            (node.src && (node.src.includes('/js/') || node.src.includes('js/')))
        );

        if (isGameScript) {
          loadingScripts++;
          gameScriptsStarted = true; // ゲーム関連のロード開始

          const finishLoad = () => {
            loadingScripts--;
            
            // rmmz_core.jsのロード完了後にUtils.encodeURIを無効化
            // Utilsが定義されたタイミングで即座に無効化
            disableUtilsEncodeURI();
            
            // カウンターが0になり、かつゲーム関連のロードが一度でも始まっていれば読み込み完了イベントを通知してmain.jsに拾わせる
            if (loadingScripts === 0 && gameScriptsStarted) {
               setTimeout(() => {
                 window.dispatchEvent(new Event('load'));
                 enableStretchMode();
               }, 50);
            }
          };

          node.addEventListener('load', finishLoad);
          node.addEventListener('error', finishLoad);
        }
        
        return originalAppendChild.call(this, node);
      };
      
      // ストレッチモード叩くくん
      function enableStretchMode() {
        // Graphicsが初期化されるまで待機
        const checkGraphics = setInterval(() => {
          if (typeof Graphics !== 'undefined' && Graphics._canvas) {
            clearInterval(checkGraphics);
            
            // ストレッチモードを有効化
            Graphics._stretchEnabled = true;
            Graphics._updateAllElements();
            
            window.addEventListener('resize', () => {
              if (Graphics._stretchEnabled) {
                Graphics._updateAllElements();
              }
            });
          }
        }, 100);
        
        // 5秒経っても初期化されなければタイムアウト
        setTimeout(() => clearInterval(checkGraphics), 5000);
      }
    })();
  `}),(0,t.jsx)(r.default,{src:"js/main.js",strategy:"afterInteractive"})]})}function o({gameData:e}){let[n,i]=(0,a.useState)(0),[s,o]=(0,a.useState)(!0),[l,d]=(0,a.useState)(null),c=(0,a.useRef)(null),u=(0,a.useRef)(new Set),g=[{path:"tyrano/libs/jquery-migrate-1.4.1.js",id:"jquery-migrate-1.4.1.js"},{path:"tyrano/libs/jquery-ui/jquery-ui.min.js",id:"jquery-ui.min.js"},{path:"tyrano/libs/jquery.a3d.js",id:"jquery.a3d.js"},{path:"tyrano/libs/jsrender.min.js",id:"jsrender.min.js"},{path:"tyrano/libs/alertify/alertify.min.js",id:"alertify.min.js"},{path:"tyrano/libs/remodal/remodal.js",id:"remodal.js"},{path:"tyrano/libs/html2canvas.js",id:"html2canvas.js"},{path:"data/system/KeyConfig.js",id:"KeyConfig.js"},{path:"tyrano/lang.js",id:"lang.js"},{path:"tyrano/libs.js",id:"libs.js"},{path:"tyrano/tyrano.js",id:"tyrano.js"},{path:"tyrano/tyrano.base.js",id:"tyrano.base.js"},{path:"tyrano/plugins/kag/kag.js",id:"kag.js"},{path:"tyrano/plugins/kag/kag.event.js",id:"kag.event.js"},{path:"tyrano/plugins/kag/kag.key_mouse.js",id:"kag.key_mouse.js"},{path:"tyrano/plugins/kag/kag.layer.js",id:"kag.layer.js"},{path:"tyrano/plugins/kag/kag.menu.js",id:"kag.menu.js"},{path:"tyrano/plugins/kag/kag.parser.js",id:"kag.parser.js"},{path:"tyrano/plugins/kag/kag.rider.js",id:"kag.rider.js"},{path:"v6"===e.tyranoVersion?"tyrano/plugins/kag/kag.studio_v6.js":"tyrano/plugins/kag/kag.studio.js",id:"kag.studio.js"},{path:"tyrano/plugins/kag/kag.tag_audio.js",id:"kag.tag_audio.js"},{path:"tyrano/plugins/kag/kag.tag_camera.js",id:"kag.tag_camera.js"},{path:"tyrano/plugins/kag/kag.tag_ext.js",id:"kag.tag_ext.js"},{path:"tyrano/plugins/kag/kag.tag_system.js",id:"kag.tag_system.js"},{path:"tyrano/plugins/kag/kag.tag_vchat.js",id:"kag.tag_vchat.js"},{path:"tyrano/plugins/kag/kag.tag_ar.js",id:"kag.tag_ar.js"},{path:"tyrano/plugins/kag/kag.tag_three.js",id:"kag.tag_three.js"},{path:"tyrano/plugins/kag/kag.tag.js",id:"kag.tag.js"},{path:"tyrano/libs/textillate/assets/jquery.lettering.js",id:"jquery.lettering.js"},{path:"tyrano/libs/textillate/jquery.textillate.js",id:"jquery.textillate.js"},{path:"tyrano/libs/jquery.touchSwipe.min.js",id:"jquery.touchSwipe.min.js"},{path:"tyrano/libs/howler.js",id:"howler.js"},{path:"tyrano/libs/jsQR.js",id:"jsQR.js"},{path:"tyrano/libs/anime.min.js",id:"anime.min.js"},{path:"tyrano/libs/lz-string.min.js",id:"lz-string.min.js"}],p=g.length,h=e=>{if(u.current.has(e))return void console.log(`[Already loaded] ${e}`);u.current.add(e);let t=u.current.size;i(Math.round(t/p*100)),t>=p&&o(!1)},m=e=>{console.error("TyranoScript resource loading error:",e),d("リソースの読み込みに失敗しました"),o(!1)};return(0,t.jsxs)(t.Fragment,{children:[["tyrano/tyrano.css","tyrano/libs/jquery-ui/jquery-ui.css","tyrano/libs/alertify/alertify.core.css","tyrano/libs/alertify/alertify.default.css","tyrano/libs/remodal/remodal.css","tyrano/libs/remodal/remodal-default-theme.css","tyrano/libs/textillate/assets/animate.css"].map(e=>(0,t.jsx)("link",{href:`./${e}`,rel:"stylesheet"},e)),(0,t.jsx)(r.default,{src:"./tyrano/libs/jquery-3.6.0.min.js",strategy:"beforeInteractive",onLoad:()=>h("jquery-3.6.0.min.js"),onError:m},"jquery-3.6.0.min.js"),g.map(e=>(0,t.jsx)(r.default,{src:`./${e.path}`,strategy:"afterInteractive",onLoad:()=>h(e.id),onError:m},e.id)),(0,t.jsxs)("div",{ref:c,style:{width:"100%",height:"100vh",position:"relative"},children:[s&&(0,t.jsx)("div",{style:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",padding:"20px",textAlign:"center",background:"#f0f0f0",borderRadius:"8px",zIndex:9999},children:(0,t.jsxs)("p",{children:["TyranoScript 読み込み中... ",n,"%"]})}),l&&(0,t.jsx)("div",{style:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",padding:"20px",color:"red",background:"#fff",border:"2px solid red",borderRadius:"8px"},children:l}),(0,t.jsx)("div",{id:"tyrano_base",className:"tyrano_base",style:{overflow:"hidden"},unselectable:"on",onDragStart:e=>e.preventDefault()}),(0,t.jsx)("div",{id:"vchat_base",className:"vchat_base",style:{overflow:"hidden"},unselectable:"on",onDragStart:e=>e.preventDefault()}),(0,t.jsx)("div",{className:"remodal-bg"}),(0,t.jsxs)("div",{className:"remodal","data-remodal-id":"modal","data-remodal-options":"hashTracking:false,closeOnEscape:false,closeOnOutsideClick:false",children:[(0,t.jsx)("h1",{className:"remodal_title"}),(0,t.jsx)("p",{className:"remodal_txt"}),(0,t.jsx)("br",{}),(0,t.jsx)("button",{"data-remodal-action":"cancel",id:"remodal-cancel",className:"remodal-cancel",children:"Cancel"}),(0,t.jsx)("button",{"data-remodal-action":"confirm",id:"remodal-confirm",className:"remodal-confirm",children:"OK"})]})]})]})}function l({htmlContent:e}){let t=(0,a.useRef)(!1);return(0,a.useEffect)(()=>{t.current||(t.current=!0,document.open(),document.write(e),document.close())},[e]),null}var d=e.i(44311);function c({gameResources:e}){return e.type===d.GAME_ENGINE.UNITY?(0,t.jsx)(n,{gameData:e.unityResource}):e.type===d.GAME_ENGINE.RPG_MAKER_MZ?(0,t.jsx)(s,{}):e.type===d.GAME_ENGINE.TYRANO_SCRIPT?(0,t.jsx)(o,{gameData:e.tyranoScriptResource}):e.type===d.GAME_ENGINE.GODOT?(0,t.jsx)(l,{htmlContent:e.godotResource.htmlContent}):void 0}e.s(["default",()=>c],23857)}]);