class LessonAnnotations{
    constructor(id, module, content, videoLink, studentMotivation, 
        tutorMotivation, lessonFeedback, programmingLanguage) {
        this._id = id ;
        this._module = module;
        this._videoLink = videoLink;
        this._studentMotivation = studentMotivation;
        this._tutorMotivation = tutorMotivation;
        this._lessonFeedback = lessonFeedback;
        this._content = content;
        this._programmingLanguage = programmingLanguage ;
    } 

    get module() {
        return this._module;
    }
    get videoLink() {
        return this._videoLink;
    }
    get studentMotivation() {
        return this._studentMotivation;
    }
    get lessonFeedback() {
        return this._lessonFeedback;
    }
    get content() {
        return this._content;
    }
    get programmingLanguage() {
        return this._programmingLanguage;
    }
}

export default LessonAnnotations;

export const createLessonAnnotationsFromJSON = (id,json)  => {
    const annotations = new LessonAnnotations(
        id, json.module, json.content, json.video_link, 
        json.student_motivation, json.tutor_motivation, 
        json.lesson_feedback, json.programming_language);
    return annotations;
}