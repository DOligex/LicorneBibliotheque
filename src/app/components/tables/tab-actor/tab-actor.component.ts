import { HttpClient } from '@angular/common/http';
import { Component, ViewChild, AfterViewInit, OnInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { merge, Observable, of as observableOf } from 'rxjs';
import { catchError, map, startWith, switchMap } from 'rxjs/operators';
// second table
import { MatTableDataSource } from '@angular/material/table';

// second table
export interface UserData {
  id: string;
  name: string;
  progress: string;
  color: string;
}

// second table
/** Constants used to fill up our data base. */
const COLORS: string[] = [
  'maroon', 'red', 'orange', 'yellow', 'olive', 'green', 'purple', 'fuchsia', 'lime', 'teal',
  'aqua', 'blue', 'navy', 'black', 'gray'
];
const NAMES: string[] = [
  'Maia', 'Asher', 'Olivia', 'Atticus', 'Amelia', 'Jack', 'Charlotte', 'Theodore', 'Isla', 'Oliver',
  'Isabella', 'Jasper', 'Cora', 'Levi', 'Violet', 'Arthur', 'Mia', 'Thomas', 'Elizabeth'
];

@Component({
  selector: 'app-tab-actor',
  templateUrl: './tab-actor.component.html',
  styleUrls: ['./tab-actor.component.scss']
})


export class TabActorComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = ['created', 'state', 'number', 'title'];
  exampleDatabase: ExampleHttpDatabase | null;
  data: GithubIssue[] = [];

  resultsLength = 0;
  isLoadingResults = true;
  isRateLimitReached = false;
  // second table
  displayedSecondColumns: string[] = ['id', 'name', 'progress', 'color'];
  dataSource: MatTableDataSource<UserData>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  // second table
  // @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  // @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor(private _httpClient: HttpClient) {
    // second table
    // Create 100 users
    const users = Array.from({length: 100}, (_, k) => createNewUser(k + 1));

    // Assign the data to the data source for the table to render
    this.dataSource = new MatTableDataSource(users);
  }

  ngOnInit() {
    // second table
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  // first table
  ngAfterViewInit() {
    this.exampleDatabase = new ExampleHttpDatabase(this._httpClient);

    // If the user changes the sort order, reset back to the first page.
    this.sort.sortChange.subscribe(() => this.paginator.pageIndex = 0);

    merge(this.sort.sortChange, this.paginator.page)
    .pipe(
      startWith({}),
      switchMap(() => {
        this.isLoadingResults = true;
        return this.exampleDatabase!.getRepoIssues(
          this.sort.active, this.sort.direction, this.paginator.pageIndex);
        }),
        map(data => {
          // Flip flag to show that loading has finished.
          this.isLoadingResults = false;
          this.isRateLimitReached = false;
          this.resultsLength = data.total_count;

          return data.items;
        }),
        catchError(() => {
          this.isLoadingResults = false;
          // Catch if the GitHub API has reached its rate limit. Return empty data.
          this.isRateLimitReached = true;
          return observableOf([]);
        })
        ).subscribe(data => this.data = data);
      }
      // second table
      applyFilter(event: Event) {
        const filterValue = (event.target as HTMLInputElement).value;
        this.dataSource.filter = filterValue.trim().toLowerCase();

        if (this.dataSource.paginator) {
          this.dataSource.paginator.firstPage();
        }
      }
    }
    // second table
    /** Builds and returns a new User. */
function createNewUser(id: number): UserData {
      const name = NAMES[Math.round(Math.random() * (NAMES.length - 1))] + ' ' +
      NAMES[Math.round(Math.random() * (NAMES.length - 1))].charAt(0) + '.';

      return {
        id: id.toString(),
        name,
        progress: Math.round(Math.random() * 100).toString(),
        color: COLORS[Math.round(Math.random() * (COLORS.length - 1))]
      };
    }

    // first table
export interface GithubApi {
      items: GithubIssue[];
      total_count: number;
    }

export interface GithubIssue {
      created_at: string;
      number: string;
      state: string;
      title: string;
    }


    /** An example database that the data source uses to retrieve data for the table. */
export class ExampleHttpDatabase {
      constructor(private _httpClient: HttpClient) {}

      getRepoIssues(sort: string, order: string, page: number): Observable<GithubApi> {
        const href = 'https://api.github.com/search/issues';
        const requestUrl =
        `${href}?q=repo:angular/components&sort=${sort}&order=${order}&page=${page + 1}`;

        return this._httpClient.get<GithubApi>(requestUrl);
      }

    }

    // ***************************************************************
    // second table structure
export class TableOverviewExample implements OnInit {




      constructor() {

      }

      ngOnInit() {

      }


    }


