<script setup lang="ts">
    import { ref } from 'vue'

    const { data } = await useFetch('https://api.carboncopy.news/questions')

    const formData = ref({
        company: '',
        email: '',
        picked: []    
    })

    const formStatus = ref('open')
    let response = {}

    const submitForm = async () => {
        formStatus.value = "pending"
        const { data: responseData } = await useFetch('https://api.carboncopy.news/response', {
            method: 'post',
            headers: {'token': 'PS91RoTw8hOvLgK4TyeTsEKv13ZFUhQR'},
            body: { 
            name: formData.value.company,
            company: formData.value.company,
            email: formData.value.email,
            questions: data.value.questions,
            picked: formData.value.picked
            }
        })

        if (responseData.value) {
            formStatus.value = 'success'
            response = responseData
        }
        else {
            formStatus.value = 'error'
        }

    }

    useHead({
        title: 'Regenerative Self-Assessment',
        meta: [
        { name: 'description', content: 'Understand how regenerative your impact and organisation are with our educational tool based on a regenerative assessment framework by Kate Bennett.' },
        { hid: 'og:image', property:'og:image', content: 'https://carboncopy.news/meta.jpg' },
        { hid: 'twitter:image', property:'twitter:image', content: 'https://carboncopy.news/meta.jpg' },
        { hid: 'og:description', property:'og:description', content: 'Understand how regenerative your impact and organisation are with our educational tool based on a regenerative assessment framework by Kate Bennett.' }
    ]
    })

</script>

<template>
    <h1 class="mt-lg-5">Regenerative Self-Assessment</h1>

    <div v-if="formStatus == 'open'">
        <p>The Regenerative Self-Assessment is designed as an educational tool to help ReFi companies better align their impact and organisation with the principles of <a class="text-decoration-none" href="https://natcapsolutions.org/regenerative-economics-101/" target="_blank">regenerative economics</a>.</p>
        <p>Upon completion, you will be provided with a score. As our goal is primarily educational, we will not make these scores public. Whether or not you share your results is your prerogative. You will also be given a badge that will display on your CARBON Copy company profile page.</p>
        <p>The methodology behind the assessment was developed by <a class="text-decoration-none" href="https://au.linkedin.com/in/ktlbennett" target="_blank">Kate Bennett.</a></p>
        
        <form @submit.prevent="submitForm" class="mt-4">
            
            <label for="companySelect" class="form-label fs-5">Company</label>
            <select id="companySelect" required class="form-select form-select-lg mb-3" v-model="formData.company" aria-label="Projects">
                <option v-for="project in data.projects" :value="project">{{ project }}</option>
            </select>

            <div v-for="(question, index) in data.questions" :key="index" class="mb-4 card shadow-sm">
                <div class="card-body">
                    <span :class="question.category == 'Regenerative Impact' ? 'badge text-bg-warning' : 'badge text-bg-info'">{{ question.category }}</span>
                    <p class="lead mt-3"><label for="questionText" class="form-label">{{ question.text }}</label></p>
                    <div class="form-check fs-5">
                        <input class="form-check-input" required type="radio" v-model="formData.picked[index]" :value="question.answerOne + ';3'" :name="question.name" :id="'answerOne' + question.name">
                        <label class="form-check-label" :for="'answerOne' + question.name">
                            {{ question.answerOne }}
                        </label>
                    </div>
                    <div class="form-check fs-5">
                        <input class="form-check-input" required type="radio" v-model="formData.picked[index]" :value="question.answerTwo + ';2'" :name="question.name" :id="'answerTwo' + question.name">
                        <label class="form-check-label" :for="'answerTwo' + question.name">
                            {{ question.answerTwo }}
                        </label>
                    </div>
                    <div class="form-check fs-5">
                        <input class="form-check-input" required type="radio" v-model="formData.picked[index]" :value="question.answerThree + ';1'" :name="question.name" :id="'answerThree' + question.name">
                        <label class="form-check-label" :for="'answerThree' + question.name">
                            {{ question.answerThree }}
                        </label>
                    </div>
                </div>
                <div v-if="question.tip" class="card-footer bg-primary-subtle border border-0 fs-6">
                    <i class="bi bi-question-circle-fill text-primary pe-2"></i><span for="questionTip" class="form-label" v-html="question?.tip"></span>
                </div>
            </div>
            <div class="my-5">
                <label for="emailAddress" class="form-label fs-5">Email address</label>
                <input type="email" required v-model="formData.email" class="form-control form-control-lg" id="emailAddress" placeholder="name@companydomain.xyz">
                <div id="emailAddressNote" class="form-text">
                    Please use an email address associated with your company's domain, if possible, so we can verify that you do in fact represent the company.
                </div>
            </div>

            <button type="submit" class="btn btn-primary btn-lg" :disabled="formStatus == 'pending'">Submit Self-Assessment</button>
        </form>
    </div>

    <div v-if="formStatus == 'success'" class="">
        <p>Thanks for filling in the assessment.</p>
        <h2 class="mt-4">Summary</h2>
        <div class="row my-4">
            <div class="col-lg-3 mb-3 mb-lg-0">
                <div class="card shadow-sm h-100 mb-lg-0">
                    <div class="card-header bg-success text-white font-bold">
                        Respondent
                    </div>
                    <div class="card-body">
                        <h5 class="card-title">{{ formData.company }}</h5>
                        <p class="card-text">{{ formData.email }}</p>
                    </div>
                </div>
            </div>
            <div class="col-lg-3 mb-3 mb-lg-0">
                <div class="card shadow-sm text-center">
                    <div class="card-header bg-success text-white font-bold">
                        Regenerative Impact
                    </div>
                    <div class="card-body">
                        <h5 class="card-title display-4">{{ response.scores.impact }}</h5>
                    </div>
                    <div class="card-footer">
                        out of possible 48 points
                    </div>
                </div>
            </div>
            <div class="col-lg-3 mb-3 mb-lg-0">
                <div class="card shadow-sm text-center">
                    <div class="card-header bg-success text-white font-bold">
                        Regenerative Organisation
                    </div>
                    <div class="card-body">
                        <h5 class="card-title display-4">{{ response.scores.organisation }}</h5>
                    </div>
                    <div class="card-footer">
                        out of possible 48 points
                    </div>
                </div>
            </div>
            <div class="col-lg-3 mb-3 mb-lg-0">
                <div class="card shadow-sm text-center">
                    <div class="card-header bg-success text-white font-bold">
                        Total Score
                    </div>
                    <div class="card-body">
                        <h5 class="card-title display-4">{{ response.scores.total }}</h5>
                    </div>
                    <div class="card-footer">
                        out of possible 96 points
                    </div>
                </div>
            </div>
        </div>

        <table class="table table-striped">
            <thead class="table-dark">
                <tr>
                    <th>Question</th>
                    <th>Answer</th>
                </tr>
            </thead>
            <tbody class="table-group-divider">
                <tr v-for="r in response.answers">
                    <td>{{ r['questionText'] }}</td>
                    <td>{{ r['Answer'] }}</td>
                </tr>
            </tbody>
        </table>
    </div>
    <div v-if="formStatus == 'pending'" class="row justify-content-center mt-5">
        <div class="col-lg-4 text-center">
            <div class="spinner-border text-primary" role="status">
            </div>
            <p class="lead text-primary">Submitting form...</p>
        </div>
    </div>
    <div v-if="formStatus == 'error'" class="mt-5">
        <p class="lead"><i class="bi bi-exclamation-octagon-fill text-danger"></i> We're so sorry, but we weren't able to submit your form. We recommend trying again. If that doesn't work, reach out to us at hello@carboncopy.news and we'll get it sorted out. Thank you!</p>
    </div>
</template>