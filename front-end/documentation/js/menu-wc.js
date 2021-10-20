'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">front-end documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AboutUsPageModule.html" data-type="entity-link" >AboutUsPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AboutUsPageModule-37b0b0847f0d81df0325b2c3fff9529e"' : 'data-target="#xs-components-links-module-AboutUsPageModule-37b0b0847f0d81df0325b2c3fff9529e"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AboutUsPageModule-37b0b0847f0d81df0325b2c3fff9529e"' :
                                            'id="xs-components-links-module-AboutUsPageModule-37b0b0847f0d81df0325b2c3fff9529e"' }>
                                            <li class="link">
                                                <a href="components/AboutUsPage.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AboutUsPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AboutUsPageRoutingModule.html" data-type="entity-link" >AboutUsPageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AppModule-271deed827361ed5bb15ffb3a7583b75"' : 'data-target="#xs-components-links-module-AppModule-271deed827361ed5bb15ffb3a7583b75"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-271deed827361ed5bb15ffb3a7583b75"' :
                                            'id="xs-components-links-module-AppModule-271deed827361ed5bb15ffb3a7583b75"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link" >AppRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/DashboardPageModule.html" data-type="entity-link" >DashboardPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-DashboardPageModule-4162f32fa25e363a50dd368d4d0fba6e"' : 'data-target="#xs-components-links-module-DashboardPageModule-4162f32fa25e363a50dd368d4d0fba6e"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-DashboardPageModule-4162f32fa25e363a50dd368d4d0fba6e"' :
                                            'id="xs-components-links-module-DashboardPageModule-4162f32fa25e363a50dd368d4d0fba6e"' }>
                                            <li class="link">
                                                <a href="components/DashboardPage.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DashboardPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/HistoryPageModule.html" data-type="entity-link" >HistoryPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-HistoryPageModule-185c382a9c1fcc8f7a51551de877d19c"' : 'data-target="#xs-components-links-module-HistoryPageModule-185c382a9c1fcc8f7a51551de877d19c"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-HistoryPageModule-185c382a9c1fcc8f7a51551de877d19c"' :
                                            'id="xs-components-links-module-HistoryPageModule-185c382a9c1fcc8f7a51551de877d19c"' }>
                                            <li class="link">
                                                <a href="components/HistoryPage.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HistoryPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/LoginPageModule.html" data-type="entity-link" >LoginPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-LoginPageModule-3a63ff60bedc53c7b55e040a503bd770"' : 'data-target="#xs-components-links-module-LoginPageModule-3a63ff60bedc53c7b55e040a503bd770"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-LoginPageModule-3a63ff60bedc53c7b55e040a503bd770"' :
                                            'id="xs-components-links-module-LoginPageModule-3a63ff60bedc53c7b55e040a503bd770"' }>
                                            <li class="link">
                                                <a href="components/LoginPage.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LoginPage</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/TermsConditionsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TermsConditionsComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/LoginPageRoutingModule.html" data-type="entity-link" >LoginPageRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/TrainingPageModule.html" data-type="entity-link" >TrainingPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-TrainingPageModule-292f1e7d7a97b475b32a7b6f99bf4fe1"' : 'data-target="#xs-components-links-module-TrainingPageModule-292f1e7d7a97b475b32a7b6f99bf4fe1"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-TrainingPageModule-292f1e7d7a97b475b32a7b6f99bf4fe1"' :
                                            'id="xs-components-links-module-TrainingPageModule-292f1e7d7a97b475b32a7b6f99bf4fe1"' }>
                                            <li class="link">
                                                <a href="components/ForcedChoiceComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ForcedChoiceComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/HelpModalComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HelpModalComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/LearningTaskComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LearningTaskComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MemoryMatchComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MemoryMatchComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/NameFaceComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >NameFaceComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/RaceSelectModalComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RaceSelectModalComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SameDifferentComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SameDifferentComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ScorePageComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ScorePageComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ShuffleComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ShuffleComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/TrainingPage.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TrainingPage</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/WhosNewComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >WhosNewComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/UserSettingsPageModule.html" data-type="entity-link" >UserSettingsPageModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-UserSettingsPageModule-12a8d0e885c42bccd01c46d47fa9dd3c"' : 'data-target="#xs-components-links-module-UserSettingsPageModule-12a8d0e885c42bccd01c46d47fa9dd3c"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-UserSettingsPageModule-12a8d0e885c42bccd01c46d47fa9dd3c"' :
                                            'id="xs-components-links-module-UserSettingsPageModule-12a8d0e885c42bccd01c46d47fa9dd3c"' }>
                                            <li class="link">
                                                <a href="components/UserSettingsPage.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UserSettingsPage</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/UserSettingsPageRoutingModule.html" data-type="entity-link" >UserSettingsPageRoutingModule</a>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#classes-links"' :
                            'data-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/MyHammerConfig.html" data-type="entity-link" >MyHammerConfig</a>
                            </li>
                            <li class="link">
                                <a href="classes/SamePasswordValidator.html" data-type="entity-link" >SamePasswordValidator</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/GetProgressService.html" data-type="entity-link" >GetProgressService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/SubmitScoresService.html" data-type="entity-link" >SubmitScoresService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#guards-links"' :
                            'data-target="#xs-guards-links"' }>
                            <span class="icon ion-ios-lock"></span>
                            <span>Guards</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="guards-links"' : 'id="xs-guards-links"' }>
                            <li class="link">
                                <a href="guards/AuthGuard.html" data-type="entity-link" >AuthGuard</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/enumerations.html" data-type="entity-link">Enums</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
                        </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});