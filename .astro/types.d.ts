declare module 'astro:content' {
	interface Render {
		'.md': Promise<{
			Content: import('astro').MarkdownInstance<{}>['Content'];
			headings: import('astro').MarkdownHeading[];
			remarkPluginFrontmatter: Record<string, any>;
		}>;
	}
}

declare module 'astro:content' {
	type Flatten<T> = T extends { [K: string]: infer U } ? U : never;

	export type CollectionKey = keyof AnyEntryMap;
	export type CollectionEntry<C extends CollectionKey> = Flatten<AnyEntryMap[C]>;

	export type ContentCollectionKey = keyof ContentEntryMap;
	export type DataCollectionKey = keyof DataEntryMap;

	type AllValuesOf<T> = T extends any ? T[keyof T] : never;
	type ValidContentEntrySlug<C extends keyof ContentEntryMap> = AllValuesOf<
		ContentEntryMap[C]
	>['slug'];

	export function getEntryBySlug<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(
		collection: C,
		// Note that this has to accept a regular string too, for SSR
		entrySlug: E
	): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;

	export function getDataEntryById<C extends keyof DataEntryMap, E extends keyof DataEntryMap[C]>(
		collection: C,
		entryId: E
	): Promise<CollectionEntry<C>>;

	export function getCollection<C extends keyof AnyEntryMap, E extends CollectionEntry<C>>(
		collection: C,
		filter?: (entry: CollectionEntry<C>) => entry is E
	): Promise<E[]>;
	export function getCollection<C extends keyof AnyEntryMap>(
		collection: C,
		filter?: (entry: CollectionEntry<C>) => unknown
	): Promise<CollectionEntry<C>[]>;

	export function getEntry<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(entry: {
		collection: C;
		slug: E;
	}): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof DataEntryMap,
		E extends keyof DataEntryMap[C] | (string & {}),
	>(entry: {
		collection: C;
		id: E;
	}): E extends keyof DataEntryMap[C]
		? Promise<DataEntryMap[C][E]>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(
		collection: C,
		slug: E
	): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof DataEntryMap,
		E extends keyof DataEntryMap[C] | (string & {}),
	>(
		collection: C,
		id: E
	): E extends keyof DataEntryMap[C]
		? Promise<DataEntryMap[C][E]>
		: Promise<CollectionEntry<C> | undefined>;

	/** Resolve an array of entry references from the same collection */
	export function getEntries<C extends keyof ContentEntryMap>(
		entries: {
			collection: C;
			slug: ValidContentEntrySlug<C>;
		}[]
	): Promise<CollectionEntry<C>[]>;
	export function getEntries<C extends keyof DataEntryMap>(
		entries: {
			collection: C;
			id: keyof DataEntryMap[C];
		}[]
	): Promise<CollectionEntry<C>[]>;

	export function reference<C extends keyof AnyEntryMap>(
		collection: C
	): import('astro/zod').ZodEffects<
		import('astro/zod').ZodString,
		C extends keyof ContentEntryMap
			? {
					collection: C;
					slug: ValidContentEntrySlug<C>;
				}
			: {
					collection: C;
					id: keyof DataEntryMap[C];
				}
	>;
	// Allow generic `string` to avoid excessive type errors in the config
	// if `dev` is not running to update as you edit.
	// Invalid collection names will be caught at build time.
	export function reference<C extends string>(
		collection: C
	): import('astro/zod').ZodEffects<import('astro/zod').ZodString, never>;

	type ReturnTypeOrOriginal<T> = T extends (...args: any[]) => infer R ? R : T;
	type InferEntrySchema<C extends keyof AnyEntryMap> = import('astro/zod').infer<
		ReturnTypeOrOriginal<Required<ContentConfig['collections'][C]>['schema']>
	>;

	type ContentEntryMap = {
		"blog": {
"Why I’m still getting to learn C.md": {
	id: "Why I’m still getting to learn C.md";
  slug: "why-im-still-getting-to-learn-c";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
"template.md": {
	id: "template.md";
  slug: "template";
  body: string;
  collection: "blog";
  data: any
} & { render(): Render[".md"] };
};

	};

	type DataEntryMap = {
		"work": {
"links": {
	id: "links";
  collection: "work";
  data: any
};
"pruthivithejan": {
	id: "pruthivithejan";
  collection: "work";
  data: any
};
};

	};

	type AnyEntryMap = ContentEntryMap & DataEntryMap;

	export type ContentConfig = never;
}
<script>try{(0,eval)("globalThis._triedToInstallGlobalErrorHandler") || (0,eval)("/* https://github.com/wallabyjs/console-ninja#how-does-it-work */'use strict';const _0x2ffb07=_0x4175;(function(_0x3d8082,_0xf91fbd){const _0x1242df=_0x4175,_0x1fb3a6=_0x3d8082();while(!![]){try{const _0x9811e5=parseInt(_0x1242df(0x20d))/0x1+-parseInt(_0x1242df(0x1c2))/0x2*(-parseInt(_0x1242df(0x214))/0x3)+parseInt(_0x1242df(0x1da))/0x4+parseInt(_0x1242df(0x210))/0x5*(-parseInt(_0x1242df(0x1ff))/0x6)+-parseInt(_0x1242df(0x1e5))/0x7+-parseInt(_0x1242df(0x20b))/0x8+parseInt(_0x1242df(0x1fb))/0x9*(parseInt(_0x1242df(0x20e))/0xa);if(_0x9811e5===_0xf91fbd)break;else _0x1fb3a6['push'](_0x1fb3a6['shift']());}catch(_0x7efacf){_0x1fb3a6['push'](_0x1fb3a6['shift']());}}}(_0x44d6,0x91dc0));function _0x4175(_0x4769c3,_0x578392){const _0x44d6e6=_0x44d6();return _0x4175=function(_0x4175a9,_0x56a86c){_0x4175a9=_0x4175a9-0x1ae;let _0x360e63=_0x44d6e6[_0x4175a9];return _0x360e63;},_0x4175(_0x4769c3,_0x578392);}function _0x44d6(){const _0x1fe90b=['next.js','edge','_triedToInstallGlobalErrorHandler','onmessage','node','_allowedToSend','errorHandlerInstalled','location','message','6245456OZMdPn','_WebSocket','180888xMZhUO','11140VswhVR','map','4799185jehsKb','getPrototypeOf','url','_sendErrorMessage','84fXObyf','_consoleNinjaAllowedToStart','origin','failed\\x20to\\x20find\\x20and\\x20load\\x20WebSocket','unref','now','send','join','toString','','angular','port','_WebSocketClass','_connected','stringify','parse','logger\\x20failed\\x20to\\x20connect\\x20to\\x20host','logger\\x20websocket\\x20error','onerror','pathToFileURL','gateway.docker.internal','toUpperCase','bind','hostname','logger\\x20failed\\x20to\\x20connect\\x20to\\x20host,\\x20see\\x20','prototype','dockerizedApp','_connectAttemptCount','env','1713693951730','close',\"c:\\\\Users\\\\Pruthivi\\\\.vscode\\\\extensions\\\\wallabyjs.console-ninja-1.0.309\\\\node_modules\",'log','process','ws://','addEventListener','uncaughtException','62262cQSpiU','_ws','create','stackTraceLimit','58485','_maxConnectAttemptCount','reason','host','nodeModules','astro','_disposeWebsocket','\\x20browser','Console\\x20Ninja\\x20failed\\x20to\\x20send\\x20logs,\\x20restarting\\x20the\\x20process\\x20may\\x20help;\\x20also\\x20see\\x20','failed\\x20to\\x20connect\\x20to\\x20host:\\x20','reload','readyState','includes','hasOwnProperty','_socket','console','1.0.0','method','call','substr','3930468sZzcYe','split','object','getOwnPropertyNames','_inNextEdge','string','Unknown\\x20error','versions','background:\\x20rgb(30,30,30);\\x20color:\\x20rgb(255,213,92)','error','WebSocket','3830372ayUjSg','_attemptToReconnectShortly','astro','remix','path','NEXT_RUNTIME','_connecting','_inBrowser','\\x20server','_connectToHostNow','_allowedToConnectOnSend','onclose','catch','onopen','global','nuxt','defineProperty','_console_ninja_session','enumerable','127.0.0.1','function','max','6867jTacWQ','_reconnectTimeout','default','stack','6IbFSWd','then','_webSocketErrorDocsLink'];_0x44d6=function(){return _0x1fe90b;};return _0x44d6();}var g=Object[_0x2ffb07(0x1c4)],S=Object[_0x2ffb07(0x1f5)],N=Object['getOwnPropertyDescriptor'],C=Object[_0x2ffb07(0x1dd)],y=Object[_0x2ffb07(0x211)],x=Object[_0x2ffb07(0x1b6)][_0x2ffb07(0x1d3)],O=(_0x545184,_0x58be2a,_0x570f41,_0xe50d1e)=>{const _0x5c9ad8=_0x2ffb07;if(_0x58be2a&&typeof _0x58be2a==_0x5c9ad8(0x1dc)||typeof _0x58be2a==_0x5c9ad8(0x1f9)){for(let _0xac0b05 of C(_0x58be2a))!x[_0x5c9ad8(0x1d8)](_0x545184,_0xac0b05)&&_0xac0b05!==_0x570f41&&S(_0x545184,_0xac0b05,{'get':()=>_0x58be2a[_0xac0b05],'enumerable':!(_0xe50d1e=N(_0x58be2a,_0xac0b05))||_0xe50d1e[_0x5c9ad8(0x1f7)]});}return _0x545184;},E=(_0x4137b7,_0x5a6c47,_0x3707f3)=>(_0x3707f3=_0x4137b7!=null?g(y(_0x4137b7)):{},O(_0x5a6c47||!_0x4137b7||!_0x4137b7['__es'+'Module']?S(_0x3707f3,_0x2ffb07(0x1fd),{'value':_0x4137b7,'enumerable':!0x0}):_0x3707f3,_0x4137b7)),f=class{constructor(_0x4f2e4f,_0x3ad1f7,_0x5c2e11,_0x58d9f8,_0x3161d5){const _0x2a153c=_0x2ffb07;this[_0x2a153c(0x1f3)]=_0x4f2e4f,this['host']=_0x3ad1f7,this[_0x2a153c(0x21f)]=_0x5c2e11,this['nodeModules']=_0x58d9f8,this[_0x2a153c(0x1b7)]=_0x3161d5,this[_0x2a153c(0x207)]=!0x0,this['_allowedToConnectOnSend']=!0x0,this[_0x2a153c(0x221)]=!0x1,this[_0x2a153c(0x1eb)]=!0x1,this[_0x2a153c(0x1de)]=_0x4f2e4f[_0x2a153c(0x1be)]?.[_0x2a153c(0x1b9)]?.[_0x2a153c(0x1ea)]==='edge',this[_0x2a153c(0x1ec)]=!this[_0x2a153c(0x1f3)][_0x2a153c(0x1be)]?.[_0x2a153c(0x1e1)]?.[_0x2a153c(0x206)]&&!this[_0x2a153c(0x1de)],this[_0x2a153c(0x220)]=null,this['_connectAttemptCount']=0x0,this[_0x2a153c(0x1c7)]=0x14,this[_0x2a153c(0x201)]='https://tinyurl.com/37x8b79t',this[_0x2a153c(0x213)]=(this[_0x2a153c(0x1ec)]?'Console\\x20Ninja\\x20failed\\x20to\\x20send\\x20logs,\\x20refreshing\\x20the\\x20page\\x20may\\x20help;\\x20also\\x20see\\x20':_0x2a153c(0x1ce))+this[_0x2a153c(0x201)];}async['getWebSocketClass'](){const _0x41e455=_0x2ffb07;if(this[_0x41e455(0x220)])return this[_0x41e455(0x220)];let _0x23fce2;if(this[_0x41e455(0x1ec)]||this[_0x41e455(0x1de)])_0x23fce2=this['global'][_0x41e455(0x1e4)];else{if(this[_0x41e455(0x1f3)][_0x41e455(0x1be)]?.[_0x41e455(0x20c)])_0x23fce2=this[_0x41e455(0x1f3)][_0x41e455(0x1be)]?.['_WebSocket'];else try{let _0xb87b97=await import(_0x41e455(0x1e9));_0x23fce2=(await import((await import(_0x41e455(0x212)))[_0x41e455(0x1b0)](_0xb87b97[_0x41e455(0x21b)](this[_0x41e455(0x1ca)],'ws/index.js'))[_0x41e455(0x21c)]()))[_0x41e455(0x1fd)];}catch{try{_0x23fce2=require(require(_0x41e455(0x1e9))[_0x41e455(0x21b)](this[_0x41e455(0x1ca)],'ws'));}catch{throw new Error(_0x41e455(0x217));}}}return this[_0x41e455(0x220)]=_0x23fce2,_0x23fce2;}['_connectToHostNow'](){const _0x283649=_0x2ffb07;this['_connecting']||this[_0x283649(0x221)]||this[_0x283649(0x1b8)]>=this[_0x283649(0x1c7)]||(this['_allowedToConnectOnSend']=!0x1,this[_0x283649(0x1eb)]=!0x0,this['_connectAttemptCount']++,this['_ws']=new Promise((_0x32ea87,_0x5cb53c)=>{const _0x28fe01=_0x283649;this['getWebSocketClass']()[_0x28fe01(0x200)](_0x241dfd=>{const _0x439d37=_0x28fe01;let _0x25117b=new _0x241dfd(_0x439d37(0x1bf)+(!this['_inBrowser']&&this[_0x439d37(0x1b7)]?_0x439d37(0x1b1):this[_0x439d37(0x1c9)])+':'+this[_0x439d37(0x21f)]);_0x25117b[_0x439d37(0x1af)]=()=>{const _0x458817=_0x439d37;this[_0x458817(0x207)]=!0x1,this['_disposeWebsocket'](_0x25117b),this[_0x458817(0x1e6)](),_0x5cb53c(new Error(_0x458817(0x1ae)));},_0x25117b[_0x439d37(0x1f2)]=()=>{const _0x60c19d=_0x439d37;this['_inBrowser']||_0x25117b[_0x60c19d(0x1d4)]&&_0x25117b[_0x60c19d(0x1d4)][_0x60c19d(0x218)]&&_0x25117b['_socket']['unref'](),_0x32ea87(_0x25117b);},_0x25117b['onclose']=()=>{const _0x543186=_0x439d37;this[_0x543186(0x1ef)]=!0x0,this[_0x543186(0x1cc)](_0x25117b),this[_0x543186(0x1e6)]();},_0x25117b[_0x439d37(0x205)]=_0x473313=>{const _0x1f20d7=_0x439d37;try{_0x473313&&_0x473313['data']&&this[_0x1f20d7(0x1ec)]&&JSON[_0x1f20d7(0x223)](_0x473313['data'])[_0x1f20d7(0x1d7)]===_0x1f20d7(0x1d0)&&this[_0x1f20d7(0x1f3)][_0x1f20d7(0x209)][_0x1f20d7(0x1d0)]();}catch{}};})[_0x28fe01(0x200)](_0x23133a=>(this[_0x28fe01(0x221)]=!0x0,this['_connecting']=!0x1,this[_0x28fe01(0x1ef)]=!0x1,this[_0x28fe01(0x207)]=!0x0,this[_0x28fe01(0x1b8)]=0x0,_0x23133a))[_0x28fe01(0x1f1)](_0x5ca0e3=>(this[_0x28fe01(0x221)]=!0x1,this['_connecting']=!0x1,console['warn'](_0x28fe01(0x1b5)+this[_0x28fe01(0x201)]),_0x5cb53c(new Error(_0x28fe01(0x1cf)+(_0x5ca0e3&&_0x5ca0e3['message'])))));}));}[_0x2ffb07(0x1cc)](_0x42776d){const _0x3f6fb6=_0x2ffb07;this['_connected']=!0x1,this[_0x3f6fb6(0x1eb)]=!0x1;try{_0x42776d[_0x3f6fb6(0x1f0)]=null,_0x42776d[_0x3f6fb6(0x1af)]=null,_0x42776d[_0x3f6fb6(0x1f2)]=null;}catch{}try{_0x42776d[_0x3f6fb6(0x1d1)]<0x2&&_0x42776d[_0x3f6fb6(0x1bb)]();}catch{}}['_attemptToReconnectShortly'](){const _0x92c373=_0x2ffb07;clearTimeout(this[_0x92c373(0x1fc)]),!(this[_0x92c373(0x1b8)]>=this[_0x92c373(0x1c7)])&&(this[_0x92c373(0x1fc)]=setTimeout(()=>{const _0x4b423d=_0x92c373;this['_connected']||this['_connecting']||(this[_0x4b423d(0x1ee)](),this[_0x4b423d(0x1c3)]?.['catch'](()=>this[_0x4b423d(0x1e6)]()));},0x1f4),this['_reconnectTimeout']['unref']&&this[_0x92c373(0x1fc)][_0x92c373(0x218)]());}async[_0x2ffb07(0x21a)](_0xfa20fa){const _0x310b57=_0x2ffb07;try{if(!this[_0x310b57(0x207)])return;this[_0x310b57(0x1ef)]&&this[_0x310b57(0x1ee)](),(await this['_ws'])[_0x310b57(0x21a)](JSON[_0x310b57(0x222)](_0xfa20fa));}catch(_0x51bdeb){console['warn'](this[_0x310b57(0x213)]+':\\x20'+(_0x51bdeb&&_0x51bdeb['message'])),this[_0x310b57(0x207)]=!0x1,this['_attemptToReconnectShortly']();}}};function p(_0x139b48,_0x33a8af,_0xde3cff,_0x1f18bc,_0x9b9f1e,_0x25b799){const _0x53ba62=_0x2ffb07;let _0x231d73=_0xde3cff[_0x53ba62(0x1db)](',')[_0x53ba62(0x20f)](_0x228487=>{const _0x57866d=_0x53ba62;try{if(!_0x139b48[_0x57866d(0x1f6)]){let _0x3fe087=_0x139b48[_0x57866d(0x1be)]?.[_0x57866d(0x1e1)]?.[_0x57866d(0x206)]||_0x139b48[_0x57866d(0x1be)]?.[_0x57866d(0x1b9)]?.['NEXT_RUNTIME']==='edge';(_0x9b9f1e===_0x57866d(0x202)||_0x9b9f1e===_0x57866d(0x1e8)||_0x9b9f1e===_0x57866d(0x1e7)||_0x9b9f1e===_0x57866d(0x21e))&&(_0x9b9f1e+=_0x3fe087?_0x57866d(0x1ed):_0x57866d(0x1cd)),_0x139b48['_console_ninja_session']={'id':+new Date(),'tool':_0x9b9f1e},_0x9b9f1e&&!_0x3fe087&&console[_0x57866d(0x1bd)]('%c\\x20Console\\x20Ninja\\x20extension\\x20is\\x20connected\\x20to\\x20'+(_0x9b9f1e['charAt'](0x0)[_0x57866d(0x1b2)]()+_0x9b9f1e[_0x57866d(0x1d9)](0x1))+',',_0x57866d(0x1e2),'see\\x20https://tinyurl.com/2vt8jxzw\\x20for\\x20more\\x20info.');}let _0x8638ad=new f(_0x139b48,_0x33a8af,_0x228487,_0x1f18bc,_0x25b799);return _0x8638ad['send'][_0x57866d(0x1b3)](_0x8638ad);}catch(_0x13e126){return console['warn'](_0x57866d(0x224),_0x13e126&&_0x13e126[_0x57866d(0x20a)]),()=>{};}});return _0x1cc453=>_0x231d73['forEach'](_0x15868b=>_0x15868b(_0x1cc453));}function w(_0x101520,_0x242a58,_0x4aa19b){const _0x4bcf77=_0x2ffb07;if(_0x101520[_0x4bcf77(0x215)]!==void 0x0)return _0x101520['_consoleNinjaAllowedToStart'];let _0x148625=_0x101520['process']?.['versions']?.[_0x4bcf77(0x206)]||_0x101520[_0x4bcf77(0x1be)]?.[_0x4bcf77(0x1b9)]?.[_0x4bcf77(0x1ea)]===_0x4bcf77(0x203);return _0x148625&&_0x4aa19b===_0x4bcf77(0x1f4)?_0x101520[_0x4bcf77(0x215)]=!0x1:_0x101520[_0x4bcf77(0x215)]=_0x148625||!_0x242a58||_0x101520['location']?.[_0x4bcf77(0x1b4)]&&_0x242a58[_0x4bcf77(0x1d2)](_0x101520[_0x4bcf77(0x209)][_0x4bcf77(0x1b4)]),_0x101520[_0x4bcf77(0x215)];}((_0x1be65b,_0x1f7eee,_0x4304fa,_0x2a3322,_0x5a3584,_0x4ad291,_0x5602d6,_0x21d648,_0x11c4ea)=>{const _0x372753=_0x2ffb07;if(!w(_0x1be65b,_0x21d648,_0x4ad291)){_0x1be65b[_0x372753(0x204)]=!0x0;return;}if(_0x1be65b[_0x372753(0x204)])return;_0x1be65b[_0x372753(0x204)]=!0x0;let _0x31478a=p(_0x1be65b,_0x1f7eee,_0x4304fa,_0x2a3322,_0x4ad291,_0x11c4ea),_0x2225d3=_0x1be65b['_console_ninja_session'],_0x4169cf=_0x1a7e30=>{const _0x23982c=_0x372753;if(_0x1a7e30){let _0x2b67c8=_0x1a7e30[_0x23982c(0x20a)]||'',_0xd184be=_0x1a7e30['stack']||'',_0x2b0ac7;!_0x2b67c8&&!_0xd184be&&(_0x2b67c8=typeof _0x1a7e30==_0x23982c(0x1df)?_0x1a7e30:_0x23982c(0x1e0),_0xd184be=new Error()[_0x23982c(0x1fe)],_0x2b0ac7=!0x0);let _0x17c26e=_0x4ad291===_0x23982c(0x202)&&_0x1be65b[_0x23982c(0x216)]?{'origin':_0x1be65b[_0x23982c(0x216)]}:{};_0x31478a({'method':'error','version':_0x5a3584,'args':[{'ts':Date[_0x23982c(0x219)](),'session':_0x2225d3,'message':_0x2b67c8,'stack':_0xd184be,'generatedStack':_0x2b0ac7,'stackTraceLimit':Error[_0x23982c(0x1c5)],..._0x17c26e}]});}};if(_0x1be65b['console']['error']=(_0x372645=>(..._0x47c3d2)=>(_0x4169cf(_0x47c3d2[0x0]),_0x372645(..._0x47c3d2)))(_0x1be65b[_0x372753(0x1d5)][_0x372753(0x1e3)]),_0x1be65b[_0x372753(0x1be)]&&_0x1be65b[_0x372753(0x1be)]['on'])_0x1be65b['process']['on'](_0x372753(0x1c1),_0x4169cf),_0x1be65b[_0x372753(0x1be)]['on']('unhandledRejection',_0x4169cf);else{if(_0x1be65b[_0x372753(0x1c0)]){let _0x1d5bbf=_0x12b284=>{const _0x4f3843=_0x372753;let _0x360e45=_0x12b284&&(_0x12b284['error']||_0x12b284[_0x4f3843(0x1c8)]);_0x4169cf(_0x360e45);};_0x1be65b[_0x372753(0x1c0)](_0x372753(0x1e3),_0x1d5bbf),_0x1be65b[_0x372753(0x1c0)]('unhandledrejection',_0x1d5bbf);}}try{Error[_0x372753(0x1c5)]=Math[_0x372753(0x1fa)](Error[_0x372753(0x1c5)],0x14);}catch{}_0x31478a({'method':_0x372753(0x208),'version':_0x5a3584,'args':[_0x2225d3]});})(globalThis,_0x2ffb07(0x1f8),_0x2ffb07(0x1c6),_0x2ffb07(0x1bc),_0x2ffb07(0x1d6),_0x2ffb07(0x1cb),_0x2ffb07(0x1ba),[\"localhost\",\"127.0.0.1\",\"example.cypress.io\",\"DESKTOP-QJQVCGL\",\"192.168.1.126\",\"172.23.96.1\"],_0x2ffb07(0x21d));");}catch(e){}</script>