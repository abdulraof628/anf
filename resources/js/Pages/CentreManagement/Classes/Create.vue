<script setup>
import BreezeAuthenticatedLayout from '@/Layouts/Admin/Authenticated.vue';
</script>

<template>
    <Head title="Classes" />

    <BreezeAuthenticatedLayout>
        <template #header></template>
        <Card>
            <template #title>Class Information</template>
            <template #content>
                <div class="grid grid-cols-1 xl:grid-cols-2 2xl:grid-cols-4 gap-4">
                    <div>
                        <Label>Centre<span class="text-red-500">*</span></Label>
                        <ComboBox :items="$page.props.allowed_centres" label-property="label" value-property="ID" :error="$page.props.errors.centre_id" v-model="form.centre_id" select-placeholder="Select Centre" search-placeholder="Search centre..."></ComboBox>
                    </div>
                    <div>
                        <Label>Programme<span class="text-red-500">*</span></Label>
                        <ComboBox :items="$page.props.programme_list" label-property="name" value-property="id" :error="!!$page.props.errors.programme_id" v-model="form.programme_id" select-placeholder="Select Programme" search-placeholder="Search programme...">
                            <template #label="{ item }">
                                {{ item.name }} ({{ item.country_name }})
                            </template>
                            <template #label-content="{ selectedItem, selectedItems, multiple }">
                                <span v-if="selectedItem">{{ selectedItem.name }} ({{ selectedItem.country_name }})</span>
                            </template>
                        </ComboBox>
                    </div>
                    <div>
                        <Label>Class Type<span class="text-red-500">*</span></Label>
                        <ComboBox :items="class_types" label-property="name" value-property="id" :error="!!$page.props.errors.class_type" v-model="form.class_type" select-placeholder="Select Class Type" search-placeholder="Search class type..." :disabled="disable_class_types"></ComboBox>
                    </div>
                    <div>
                        <Label>Class Level<span class="text-red-500">*</span></Label>
                        <ComboBox :items="class_levels" label-property="level" value-property="id" :error="!!$page.props.errors.programme_level_id" v-model="form.programme_level_id" select-placeholder="Select Class Level" search-placeholder="Search class level..." :disabled="disable_class_levels"></ComboBox>
                    </div>
                    <div>
                        <Label>Class Day<span class="text-red-500">*</span></Label>
                        <ComboBox :items="$page.props.day_list" label-property="name" value-property="id" :error="!!$page.props.errors.class_day" v-model="form.class_day" select-placeholder="Select Class Level" search-placeholder="Search class level..."></ComboBox>
                    </div>
                    <div>
                        <Label>Class Method<span class="text-red-500">*</span></Label>
                        <ComboBox :items="$page.props.method_list" label-property="name" value-property="id" :error="!!$page.props.errors.class_method" v-model="form.class_method" select-placeholder="Select Class Level" search-placeholder="Search class level..."></ComboBox>
                    </div>
                    <div>
                        <Label>Start Time<span class="text-red-500">*</span></Label>
                        <Datepicker mode="time" format="H:mm" v-model="form.start_time"/>
                    </div>
                    <div>
                        <Label>End Time<span class="text-red-500">*</span></Label>
                        <Datepicker mode="time" format="H:mm" v-model="form.end_time"/>
                    </div>
                    <div>
                        <Label>Class Capacity<span class="text-red-500">*</span></Label>
                        <Input type="number" :error="!!$page.props.errors.class_capacity" v-model="form.class_capacity"></Input>
                    </div>
                </div>
            </template>
        </Card>
        <Card>
            <template #content>
                <div class="flex items-center justify-between">
                    <div class="flex space-x-2 items-center">
                        <Label>Active</Label>
                        <Switch v-model="form.class_status"></Switch>
                    </div>
                    <div class="flex space-x-2">
                        <Button variant="outline" @click="$inertia.get(route('classes'))">Cancel</Button>
                        <Button @click="submit">Save</Button>
                    </div>
                </div>
            </template>
        </Card>
    </BreezeAuthenticatedLayout>
</template>

<script>
import { Head, Link } from '@inertiajs/inertia-vue3';
import Card from '@/Components/Card.vue'
import Dialog from '@/Components/DialogModal.vue'

export default {
    components: {
        Head, Link, Card, Dialog
    },
    data(){
        return{
            disable_class_types: true,
            disable_class_levels: true,
            class_types: [],
            class_levels: [],
            form: {
                centre_id: this.$page.props.centre_id ? Number(this.$page.props.centre_id) : '',
                programme_id: '',
                programme_level_id: '',
                class_day: '',
                start_time: '',
                end_time: '',
                class_capacity: '',
                class_type: '',
                class_method: '',
                class_status: true,
            }
        }
    },
    watch: {
        'form.programme_id': {
            handler(){
                if(this.form.programme_id){
                    this.disable_class_types = true
                    this.disable_class_levels = true
                    this.form.class_type = ''
                    this.form.programme_level_id = ''
                    axios.get(route('classes.get_class_types'), {
                        params: {
                            'programme_id': this.form.programme_id,
                        }
                    })
                    .then((response) => {
                        this.class_types = response.data
                        this.disable_class_types = false
                    })
                }
            },
            deep: true
        },
        'form.class_type': {
            handler(){
                if(this.form.programme_id && this.form.class_type){
                    this.disable_class_levels = true
                    this.form.programme_level_id = ''
                    axios.get(route('classes.get_class_levels'), {
                        params: {
                            'programme_id': this.form.programme_id,
                            'class_type': this.form.class_type
                        }
                    })
                    .then((response) => {
                        this.class_levels = response.data
                        this.disable_class_levels = false
                    })
                }
            },
            deep: true
        },
    },
    methods: {
        submit() {
            this.$inertia.post(route('classes.store'), this.form, { preserveState: true})
        },
    }
}
</script>
