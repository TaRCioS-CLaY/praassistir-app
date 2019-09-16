<template>
    <Page class="page">
        <ActionBar title="Filmes em Cartaz" class="action-bar">
            <!-- 
            Use the NavigationButton as a side-drawer button in Android
            because ActionItems are shown on the right side of the ActionBar
            -->
            <NavigationButton ios:visibility="collapsed" icon="res://menu" @tap="onDrawerButtonTap"></NavigationButton>
            <!-- 
            Use the ActionItem for IOS with position set to left. Using the
            NavigationButton as a side-drawer button in iOS is not possible,
            because its function is to always navigate back in the application.
            -->
            <ActionItem icon="res://navigation/menu" 
                android:visibility="collapsed" 
                @tap="onDrawerButtonTap"
                ios.position="left">
            </ActionItem>
        </ActionBar>





  <ScrollView>
            <!-- <StackLayout class="home-panel">

                <ListView class="list-group" for="filme in listaFilmes"
                    style="height:1250px">
                    <v-template>
                        <FlexboxLayout flexDirection="row" class="list-group-item">
                            <Image :src="filme.poster_path" class="thumb" />
                            <Label :text="filme.title" class="list-group-item-heading"
                                style="width: 60%" />
                        </FlexboxLayout>
                    </v-template>
                </ListView>

                
            </StackLayout> -->


        <RadListView ref="radlist" for="filme in listaFilmes">
            <v-template>
                <!-- <CardView elevation="10" margin="5"> -->
                    <WrapLayout>
                        <Image :src="filme.poster_path" stretch="aspectFill" margin="5" row="0" width="40%" height="40%"/>
                        <StackLayout>
                            <Label :text="filme.title" class="info" textWrap="true" row="0" fontWeight="bold" width="50%" height="30%"/>
                            <Label :text="filme.overview" class="info fonte" textWrap="true" row="1" margin="5" width="50%" height="30%"/>
                        </StackLayout>
                        <!-- <StackLayout row="3" class="hr-light"></StackLayout>
                        <FlexboxLayout justifyContent="space-between" row="4">
                        </FlexboxLayout> -->
                    </WrapLayout>
                <!-- </CardView> -->
            </v-template>
        </RadListView>

            
        </ScrollView>

    </Page>
</template>

<script>
    import * as utils from "~/shared/utils";
    import SelectedPageService from "../shared/selected-page-service";
    import * as moviesApi from '../shared/moviedb.service';
    
    export default {
        
        data(){
           return {
                listaFilmes: [],
           } 
        },

        mounted() {
            SelectedPageService.getInstance().updateSelectedPage("Home");
            moviesApi.emCartaz()
            .then(resposta => {
                return this.listaFilmes = resposta;
                //console.log('Lista de filmes: ',this.listaFilmes);
            });
            
        },

        computed: {
            message() {
                return "<!-- conteudo -->";
            },
             onItemTap: function(args) {
                console.log("Item with index: " + args.index + " tapped");
            },
        },
        methods: {
            onDrawerButtonTap() {
                utils.showDrawer();
            }
        },
        
    };
</script>

<style scoped lang="scss">
    // Start custom common variables
    @import '../app-variables';
    // End custom common variables

    // Custom styles
</style>