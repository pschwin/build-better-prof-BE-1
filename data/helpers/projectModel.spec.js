const projectsDb = require('./projectModel.js');
const db = require('../dbConfig');
const server = require('../../api/server.js');
const request = require('supertest');
describe('projects model', () =>{

    
    describe('/POST insert()', () =>{
        afterEach(async () =>{
            await db('project').truncate()
        })

        it('should insert the provided games into the db 201 Status', async()=>{
            await projectsDb.insert({ className: 'Science', dueDate: 'April', projectName: 'Projecto', student_id: 1})
            await projectsDb.insert({ className: 'Math', dueDate: 'June', projectName: 'Projecto2', student_id: 2})
            
            const project = await db('project')
            expect(project[0].className).toBe('Science')
            expect(project).toHaveLength(2)
            expect(201)

        })

        it('should insert the right game', async()=>{
            await projectsDb.insert({ className: 'Science', dueDate: 'April', projectName: 'Projecto', student_id: 1});
            const projects = await db('project')
            expect(projects[0].className).toBe('Science')

        })

        it('Successfully post a project', () => {
            return request(server)
            .post('/api/projects')
            .send({
                className: 'History', 
                dueDate: 'March', 
                projectName: 'Project1', 
                student_id: 1, 
            })
            .expect(201)
        })
    })
})