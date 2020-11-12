import Moment from 'moment-timezone';
import 'moment/locale/pt-br';
import {createStudentFromJSON} from './Student';
import {createLessonAnnotationsFromJSON}  from './LessonAnnotations';


class Lesson {
    constructor(id, 
                startDate, 
                duration, 
                type, 
                status,
                hubspotId,
                student,
                tutorName,
                annotations) {
        this._id = id;
        this._startDate = startDate;
        this._duration = duration;
        this._type = type;
        this._status = status;
        this._hubspotId = hubspotId;
        this._student = student;
        this._tutorName = tutorName;
        this._annotations = annotations;
    } 

    get id() {
        return this._id;
    }

    get duration() {
        return this._duration;
    }

    get crmId() {
        return this._crmId;
    }

    set crmId(id) {
        this._crmId = id;
    }

    get startDate() {
        return this._startDate;
    }

    get endDate() {
        const endDate = this.startDate.clone();
        endDate.add(this.duration, 'minutes');
        return endDate;
    }

    getHaveAlreadyHappened(todayMoment){
        return todayMoment.isAfter(this.endDate);
    }

    get type() {
        return this._type;
    }

    get status() {
        return this._status;
    }

    get annotations() {
        return this._annotations;
    }


    get student() {
        return this._student;
    }

    get tutorName() {
        return this._tutorName;
    }

    getDayOfYearFormmated(locale){
        const date = this.startDate.clone().tz(locale)
        return date.format('DD/MM/YYYY')
    }
    getDayOfMonthFormmated(locale){
        const date = this.startDate.clone().tz(locale)
        return date.format('DD [de] MMMM')
    }
    getDayOfMonth(locale){
        const date = this.startDate.clone().tz(locale)
        return date.format('DD')
    }
    getMonth(locale){
        const date = this.startDate.clone().tz(locale)
        return date.format('MMMM')
    }
    getMonthOfYearFormmated(locale){
        const date = this.startDate.clone().tz(locale)
        return date.format('MM/YYYY')
    }
}
export default Lesson;

export const createLessonFromJSON = (json)  => {
    const startDate = Moment(json.start_date.iso);
    const student = createStudentFromJSON(json);
    let annotations;
    if(json.annotations){
        annotations = createLessonAnnotationsFromJSON(json.annotations.objectId, json.annotations);
    }
    const currentLesson = new Lesson(
        json.objectId, startDate, json.duration, 
        json.type, json.status, json.hubspot_id, 
        student, json.tutor.name ,annotations,
    );
    return currentLesson;
}

export const createArrayLessonsFromJSON = (jsonArray)  => {
    return jsonArray.map((jsonLesson) => {
         return createLessonFromJSON(jsonLesson);
    })
}
