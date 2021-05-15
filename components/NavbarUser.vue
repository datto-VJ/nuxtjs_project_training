<template>
    <div>
        <b-navbar toggleable="lg" type="dark" variant="info">
            <b-navbar-brand >Datt's POSTS</b-navbar-brand>

            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

            <b-collapse id="nav-collapse" is-nav>
            <b-navbar-nav>
                <b-nav-item><nuxt-link to="/">Posts</nuxt-link></b-nav-item>
                <b-nav-item><nuxt-link to="/myposts">Donate my posts</nuxt-link></b-nav-item>
                <b-nav-item><nuxt-link to="contact">Contact</nuxt-link></b-nav-item>
            </b-navbar-nav>

            <!-- Right aligned nav items -->
            <b-navbar-nav class="ml-auto">
                <b-nav-form>
                <b-form-input size="sm" class="mr-sm-2" placeholder="Search"></b-form-input>
                <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
                </b-nav-form>

                <b-nav-item-dropdown text="Lang" right>
                <b-dropdown-item href="#">EN</b-dropdown-item>
                <b-dropdown-item href="#">JP</b-dropdown-item>
                <b-dropdown-item href="#">VN</b-dropdown-item>
                </b-nav-item-dropdown>

                <b-nav-item-dropdown right>
                <!-- Using 'button-content' slot -->
                <template #button-content>
                    <em>User</em>
                </template>
                <b-dropdown-item href="#">Profile</b-dropdown-item>
                <b-dropdown-item href="#">Setting</b-dropdown-item>
                <b-dropdown-item href="#">Sign Out</b-dropdown-item>
                </b-nav-item-dropdown>
            </b-navbar-nav>
            </b-collapse>
        </b-navbar>
    </div>
</template>

<style scoped>
    .nuxt-link-exact-active{
        color: white;
    }
    a:hover{
        text-decoration: none;
    }
</style>