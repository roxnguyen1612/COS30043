var studMarks = [
    {"name": "Amy", "mark": 90},
    {"name": "Bill", "mark": 80},
    {"name": "Casey", "mark": 78},
    {"name": "David", "mark": 84},
    {"name": "Ella", "mark": 95},
    {"name": "Frank", "mark": 82},
    {"name": "Gina", "mark": 88},
    {"name": "Harry", "mark": 76},
    {"name": "Ivy", "mark": 91},
    {"name": "Jack", "mark": 69},
    {"name": "Kara", "mark": 85},
    {"name": "Liam", "mark": 92},
    {"name": "Mona", "mark": 75},
    {"name": "Ned", "mark": 83},
    {"name": "Olivia", "mark": 79},
    {"name": "Pete", "mark": 77},
    {"name": "Quinn", "mark": 89},
    {"name": "Rose", "mark": 81},
    {"name": "Sam", "mark": 74},
    {"name": "Tina", "mark": 87},
    {"name": "Uma", "mark": 93},
    {"name": "Vince", "mark": 70},
    {"name": "Wendy", "mark": 86},
    {"name": "Xavier", "mark": 94},
    {"name": "Yara", "mark": 68},
    {"name": "Zack", "mark": 71}
];

const StudentMarks = 
{
    components: {
        paginate: VuejsPaginateNext,
    },
    data: function () {
        return {
            currentPage: 1,
            students: studMarks,
        }
    },
    template: `
    <h1>Student Mark</h1>
    <div class="table-responsive">
        <table class="table table-striped table-hover">
            <thead>
                <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Mark</th>
                </tr>
            </thead>

            <tbody>
                <tr v-for="s in getStuds">
                    <td>{{s.name}}</td>
                    <td>{{s.mark}}</td>
                </tr>
            </tbody>
        </table>

        <!-- Vue Paginate template -->
        <paginate 
            :page-count="13"    
            :page-range="3" 
            :margin-pages="1"
            :click-handler="clickCallback" 
            :prev-text=" 'Prev Page' " 		
            :next-text="'Next Page'" 
            :container-class="'pagination'" 
            :active-class="'currentPage'"
            >
        </paginate>
    </div>
    `,
    computed: {
        getStuds: function() {
            let current = this.currentPage * 2;  // total 24 units, suppose 2 per page, 12 pages
            let start = current - 2;
            return this.students.slice(start, current);
        }
    },
    methods: {
        clickCallback: function(pageNum) {
            this.currentPage = Number(pageNum);
        }
    }
}