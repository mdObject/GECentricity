
Usage Example
===============
## Extension of the Array<T>
    For regular and async methods use arrow declarations. For example ```load=()=>{}``` or ```loadAsync = async ()=>{}```

## Problems
    1. Show all previous (signed only) values. Filter for ObjectStatus.Changed && ObjectStatus.Unchanged
    ```
    private patient: Patient;
    private problemList: Problems;

    ngOnInit(): void {
    const patientAsync = this.mdObject.emr.patientAsync();
    patientAsync
      .then(p => { this.patient = p; return p.problemsAsync(); })
        .then(e => this.problemList = e.filterProblems(i => (i.status === ObjectStatus.Changed || i.status === ObjectStatus.Unchanged)));
     }
    ```
    2. Show all current (signed and unsigned) values. No duplicate values. Filter for !ObjectStatus.Changed
    ```
    private patient: Patient;
    private problemList: Problems;

    ngOnInit(): void {
    const patientAsync = this.mdObject.emr.patientAsync();
    patientAsync
      .then(p => { this.patient = p; return p.problemsAsync(); })
        .then(e => this.problemList = e.filterProblems(i.status !== ObjectStatus.Changed));
     }
    ```
    3. Show all unchanged values
    ```
    private patient: Patient;
    private problemList: Problems;

    ngOnInit(): void {
    const patientAsync = this.mdObject.emr.patientAsync();
    patientAsync
      .then(p => { this.patient = p; return p.problemsAsync(); })
        .then(e => this.problemList = e.filterProblems(i => i.status === ObjectStatus.Unchanged));
     }
    ```
    4. Show all new values
    ```
    private patient: Patient;
    private problemList: Problems;

    ngOnInit(): void {
    const patientAsync = this.mdObject.emr.patientAsync();
    patientAsync
      .then(p => { this.patient = p; return p.problemsAsync(); })
        .then(e => this.problemList = e.filterProblems(i => i.status === ObjectStatus.Added));
     }
    ```
    5. Show all deleted values
    ```
    private patient: Patient;
    private problemList: Problems;

    ngOnInit(): void {
    const patientAsync = this.mdObject.emr.patientAsync();
    patientAsync
      .then(p => { this.patient = p; return p.problemsAsync(); })
        .then(e => this.problemList = e.filterProblems(i => i.status === ObjectStatus.Removed));
     }
    ```
    6. Show all modified values
    ```
    private patient: Patient;
    private problemList: Problems;

    ngOnInit(): void {
    const patientAsync = this.mdObject.emr.patientAsync();
    patientAsync
      .then(p => { this.patient = p; return p.problemsAsync(); })
        .then(e => this.problemList = e.filterProblems(i => i.status === ObjectStatus.Updated));
     }
    ```
